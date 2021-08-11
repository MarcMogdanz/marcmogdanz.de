---
title: "Security.txt In The Wild"
description: Crawling the Alexa Top 1000 websites and checking their security.txt file
# author: ["Marc"]
# aliases: ["/example"]
tags: ["Security.txt", "JavaScript", "TypeScript"]
draft: false
date: 2021-05-31T12:00:00+00:00
metis: ab2daaca25b14efe994198f4e9ed124d

cover:
  image: "/posts/security-txt-in-the-wild/cover.png"
  alt: 'A file icon labeled "security.txt" with grass around it'
  hidden: false

ShowReadingTime: true
ShowPostNavLinks: true
ShowBreadCrumbs: false
ShowToc: true
TocOpen: false
DisableShare: true
ShowShareButtons: false
HideSummary: false
---

Recently I've stumbled upon an interesting [proposal](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-12) on defining security policies called _security.txt_.

As I'm quite interested in the security scene myself, I wondered how many websites already use a security.txt?

# What is a security.txt file?

The security.txt is a proposed standard to define security policies on websites.

It consists of a simple and machine readable format for a text file which should be placed in a [_well known_](https://datatracker.ietf.org/doc/html/rfc8615) location.

Below is a minified version of [CloudFlare's security.txt](https://www.cloudflare.com/.well-known/security.txt) as an example:

```text
Contact: https://hackerone.com/cloudflare
Contact: mailto:security@cloudflare.com
Contact: https://www.cloudflare.com/abuse/
Preferred-Languages: en
Encryption: https://www.cloudflare.com/gpg/security-at-cloudflare-pubkey-06A67236.txt
Canonical: https://www.cloudflare.com/.well-known/security.txt
Policy: https://www.cloudflare.com/disclosure
Hiring: https://www.cloudflare.com/careers/jobs/
Expires: Tue, 15 Mar 2022 13:43:01 -0700
```

As you can see in the example above there are quite a few fields which can be defined. I'll try my best and give a brief overview:

- `Acknowledgments` links to the website's hall of fame for security researchers
- `Canonical` indicates related places where the security.txt can be found
- `Contact` represents a way to contact the organisation, usually an e-mail address or website
- `Encryption` links to a location where the key can be found which is used to sign the security.txt
- `Expires` is a timestamp from when on the content should be treated as stale
- `Hiring` links to security related jobs at the organisation
- `Policy` links to the vulnerability disclosure
- `Preferred-Languages` is a set of languages that are preferred for submitting reports

More info and an easy to use generator for your own website can be found on the [official website](https://securitytxt.org/).

# Idea

My general idea was to get a list of domains to check, crawl the `/.well-known/security.txt` path and save the response as well as some meta data in a database. Though the specification allows an alternative path under `/security.txt`, I'll only query the `/.well-known/security.txt` path for simplicity's sake.

Regarding the list of domains I found a very handy [shell script](https://gist.github.com/evilpacket/3628941) by [Adam Baldwin](https://github.com/evilpacket) which fetches the Alexa Top websites and outputs the first 1000 in a slim text file.

# Crawling

To get the data we need, I wrote a quick and dirty JavaScript script that reads a file with a list of domains as input, crawls all of them and saves:

- current timestamp
- requested domain
- returned status code
- returned `Content-Type` header
- response's body

After crawling all these domains and inspecting the data, I got **116** failed requests. While inspecting them most of them were due to either broken redirects, invalid SSL certificates or simply not serving any HTTP/HTTPS traffic on them like the `amazonaws.com` root domain. Nothing I want to manually inspect, so I decided to just ignore them.

In general most of the successful requests just returned a `404 Not Found` or similar errors indicating there is no content to be served.

While going manually through the database I also discovered that many requests, which were returned with a `200 OK` status code, had a `Content-Type: text/html` header set. This seemed a bit off as the [specification explicitly states the file must be served as plain text](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-12#section-5). After digging around a bit more, I found out that many websites returned a `404 Not Found` page with a `200 OK` status code.

In order to filter out the false positives, I've added a new column indicating if the given domain has a security.txt or not. My approach was to treat all entries as _does not have security.txt_ when either the content-type header did not include `text/plain` **or** the returned status code was not `200 OK`.

```sql
UPDATE results SET hasSecurityFile = 0 WHERE headerContentType NOT LIKE "%text/plain%" OR statusCode IS NOT 200;
```

After this cleanup I've ended up with **105** entries with a security.txt in place. I still manually reviewed the remaining ones and filtered out a few false positives, leaving us with a final amount of **101** valid entries.

In the next step I'll further analyze them.

# Analyzing

The official website lists a few projects involving security.txt in some way. On there I've found a [TypeScript script](https://github.com/movitz-s/security-txt-node-parser) by [Movitz Sunar](https://github.com/movitz-s) which parses a given security.txt input and checks it against the security.txt's specification. I've used this one as a base and modified it a bit to fit my needs, my version can be found in the [Downloads paragraph](#downloads).

Out of all **101** security.txt files I only found **one** which is fully compliant to the current (12th) version of the draft.

The most common violation with **96** times was a missing `Expires` field which is a required field stated in [section 3.5.5](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-12#section-3.5.5). Only **one** field had a valid value according to [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601).

Followed by missing `mailto:` prefixes when [using e-mail addresses](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-12#section-3.5.3) in the `Contact` field with **13** violations.

Another interesting observation is the usage of the `Signature` and `Acknowledgements`/`Acknowledgement` fields which were part of earlier versions of the draft but are not anymore. The `Acknowledgments` field was renamed in the [4th version of the draft](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-04) meanwhile the `Signature` field was dropped in the [5th version of the draft](https://datatracker.ietf.org/doc/html/draft-foudil-securitytxt-05). There were a total of **four** `Signature` fields and **48** usages of either the old `Acknowledgments` field or a misspelled version of it.

A total of **seven** files were PGP signed. All signatures were hashed with a [SHA-2 algorithm](https://en.wikipedia.org/wiki/SHA-2), **three** with _256_ bits and **four** with _512_ bits.

**Twenty** files also had a `Preferred-Languages` field set. All of them are accepting `en` (English). Additionally the following languages are also accepted: `ru` (Russian, **two**), `tr` (Turkish, **one**), `et` (Estonian, **one**) and `pl` (Polish, **one**).

# Downloads

A .zip-file containing my scripts to crawl and analyze the data as well as the sqlite database and the list of domains I've crawled can be downloaded [here](/posts/security-txt-in-the-wild/security-txt.zip). For the lazy ones, [here](https://gist.github.com/MarcMogdanz/331223649e03108b002c4d8029053b7d) is a GitHub Gist.

---
title: "Building a Scalable Web Scraping API"
slug: building-a-scalable-web-scraping-api
description: "Creating a custom web scraping API to handle all kinds of scraping tasks."
pubDatetime: 2024-12-08T00:00:00+00:00
tags: ["Notes", "Web Scraping"]
---

I'm doing quite a lot of web scraping over the last few months, but it's started to become a real challenge to maintain all the scrapers. Since I'm scraping a lot of different websites for quite a few different projects, I've so far always just created a custom scraping setup for that given project. This doesn't really scale well and also opens up a bunch of other issues since I have to apply changes to all scrapers individually, keeping up with anti-bot mechanisms, managing proxies, etc.

This lead me down the rabbit hole of researching what platforms do already exist. I did find a few promising ones, but they either all have some limitations that don't fit my use case or are just too expensive, especially since most of them also are subscription based.

So that's where I'm currently at. Trying to formalize a list of requirements for the API I'm building. Here's what I have on my mind so far:

**Customizable:** I don't want a finite list of parameters that are supported, like `?waitFor=div.some-class`. I want to be able to send a JavaScript function to the API which accepts a `Puppeteer.page` instance as a parameter and handles the scraping. This allows me to manage all scraper related logic (hosting, proxies, scalability, etc.) in one place but still have the actual scraping logic in my individual projects and I don't need to release a new version of my API every time I want to scrape a new website.

**Stateless:** Each request should have it's own lifecycle and not share any state with other requests. This is important to avoid any issues with cookies, sessions, etc. Since you should be able to pass in a 100% custom function, there's no need for maintaining any state between requests and "controlling" the same browser instance across requests.

**Pre-defined functions:** There should be basic support for common use cases like taking a screenshot, creating a PDF or scraping Google SERP results. This is to avoid having to write the same code over and over again. It should still under the hood talk to the same API endpoint you would use for your custom scraping function, but the function for that just lives in the API itself.

**Scheduling:** Since not every scraping task needs to be awaited in real-time, there should be support for scheduling tasks. This should just use a queue under the hood and potentially allow for setting a time frame in which the task should be executed, e.g. "somewhere in the next 24 hours".

**Webhooks:** A must-have feature when scheduling tasks. You should be able to provide a webhook URL and not await the response of the API, same as with scheduling tasks.

**Observability:** From my experience, it's always quite a pain to properly debug production issues. The API should keep a record of all requests including metadata such as CPU usage, error messages and potentially full logs which were emitted during the request.

**Security:** Since the API will be running arbitrary code, it's always good to make sure that it's being run in a secure environment.

**Bare-metal:** I've done quite some math on all the managed hosting providers (AWS Lambda/ECS, Google Cloud Functions/Run, Fly, etc.) and they all don't really work well with the use case since it's either too limiting or plain too expensive. The best way to keep it as cheap as possible while maintaining full control and high performance is to run it bare-metal.

**Scalability:** It doesn't need to scale immediately and infinitely, but it should be able to handle a large number of requests in parallel and be able to scale horizontally. I haven't settled on a specific setup yet since I'm still researching and prototyping, but most likely it's going to be based on Kubernetes. While I'm not the biggest fan of Kubernetes, it offers quite the right level of abstraction while still giving you full control over the underlying infrastructure.

Let's see how this goes. I'm planning to write a few more notes on the progress and challenges.

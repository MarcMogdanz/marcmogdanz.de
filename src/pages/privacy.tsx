import React from "react";
import Layout from "../components/Layout";
import { StyledLink } from "../components/Link";

const FirstLevelHeadline = ({ text }: { text: string }): JSX.Element => (
  <div className="text-2xl mb-4">{text}</div>
);

const SecondLevelHeadline = ({ text }: { text: string }): JSX.Element => (
  <div className="text-xl mb-4">{text}</div>
);

const ThirdLevelHeadline = ({ text }: { text: string }): JSX.Element => (
  <div className="text-lg mb-4">{text}</div>
);

const TextBlock = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => <p className="mb-4">{children}</p>;

const Image = ({
  src,
  alt,
  style,
}: {
  src: string;
  alt: string;
  style: React.CSSProperties;
}): JSX.Element => <img src={src} alt={alt} style={style} className="mb-4" />;

const PrivacyPage = (): JSX.Element => (
  <Layout page="Privacy Policy">
    <>
      <div className="flex flex-col">
        <div className="md:mx-auto md:w-2/3 font-mono">
          <FirstLevelHeadline text="Privacy Policy" />

          <TextBlock>
            Personal data (usually referred to just as &quot;data&quot; below)
            will only be processed by us to the extent necessary and for the
            purpose of providing a functional and user-friendly website,
            including its contents, and the services offered there.
          </TextBlock>

          <TextBlock>
            Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data
            Protection Regulation (hereinafter referred to as the
            &quot;GDPR&quot;), &quot;processing&quot; refers to any operation or
            set of operations such as collection, recording, organization,
            structuring, storage, adaptation, alteration, retrieval,
            consultation, use, disclosure by transmission, dissemination, or
            otherwise making available, alignment, or combination, restriction,
            erasure, or destruction performed on personal data, whether by
            automated means or not.
          </TextBlock>

          <TextBlock>
            The following privacy policy is intended to inform you in particular
            about the type, scope, purpose, duration, and legal basis for the
            processing of such data either under our own control or in
            conjunction with others. We also inform you below about the
            third-party components we use to optimize our website and improve
            the user experience which may result in said third parties also
            processing data they collect and control.
          </TextBlock>

          <TextBlock>Our privacy policy is structured as follows:</TextBlock>

          <TextBlock>
            I. Information about us as controllers of your data
            <br />
            II. The rights of users and data subjects
            <br />
            III. Information about the data processing
          </TextBlock>

          <SecondLevelHeadline text="I. Information about us as controllers of your data" />

          <TextBlock>
            The party responsible for this website (the &quot;controller&quot;)
            for purposes of data protection law is:
          </TextBlock>

          <Image src="/address.png" alt="Address" style={{ height: "60px" }} />

          <Image
            src="/contact.png"
            alt="Contact information"
            style={{ height: "40px" }}
          />

          <TextBlock>
            The controller&apos;s data protection officer is:
          </TextBlock>

          <Image src="/address.png" alt="Address" style={{ height: "60px" }} />

          <SecondLevelHeadline text="II. The rights of users and data subjects" />

          <TextBlock>
            With regard to the data processing to be described in more detail
            below, users and data subjects have the right
          </TextBlock>

          <ul className="list-disc list-inside mb-4">
            <li>
              to confirmation of whether data concerning them is being
              processed, information about the data being processed, further
              information about the nature of the data processing, and copies of
              the data (cf. also Art. 15 GDPR);
            </li>

            <li>
              to correct or complete incorrect or incomplete data (cf. also Art.
              16 GDPR);
            </li>

            <li>
              to the immediate deletion of data concerning them (cf. also Art.
              17 DSGVO), or, alternatively, if further processing is necessary
              as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing
              per Art. 18 GDPR;
            </li>

            <li>
              to receive copies of the data concerning them and/or provided by
              them and to have the same transmitted to other
              providers/controllers (cf. also Art. 20 GDPR);
            </li>

            <li>
              to file complaints with the supervisory authority if they believe
              that data concerning them is being processed by the controller in
              breach of data protection provisions (see also Art. 77 GDPR).
            </li>
          </ul>

          <TextBlock>
            In addition, the controller is obliged to inform all recipients to
            whom it discloses data of any such corrections, deletions, or
            restrictions placed on processing the same per Art. 16, 17 Para. 1,
            18 GDPR. However, this obligation does not apply if such
            notification is impossible or involves a disproportionate effort.
            Nevertheless, users have a right to information about these
            recipients.
          </TextBlock>

          <TextBlock>
            Likewise, under Art. 21 GDPR, users and data subjects have the right
            to object to the controller&apos;s future processing of their data
            pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection
            to data processing for the purpose of direct advertising is
            permissible.
          </TextBlock>

          <SecondLevelHeadline text="III. Information about the data processing" />

          <TextBlock>
            Your data processed when using our website will be deleted or
            blocked as soon as the purpose for its storage ceases to apply,
            provided the deletion of the same is not in breach of any statutory
            storage obligations or unless otherwise stipulated below.
          </TextBlock>

          <ThirdLevelHeadline text="Server data" />

          <TextBlock>
            For technical reasons, the following data sent by your internet
            browser to us or to our server provider will be collected,
            especially to ensure a secure and stable website: These server log
            files record the type and version of your browser, operating system,
            the website from which you came (referrer URL), the webpages on our
            site visited, the date and time of your visit, as well as the IP
            address from which you visited our site.
          </TextBlock>

          <TextBlock>
            The data thus collected will be temporarily stored, but not in
            association with any other of your data.
          </TextBlock>

          <TextBlock>
            The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our
            legitimate interest lies in the improvement, stability,
            functionality, and security of our website.
          </TextBlock>

          <TextBlock>
            The data will be deleted within no more than seven days, unless
            continued storage is required for evidentiary purposes. In which
            case, all or part of the data will be excluded from deletion until
            the investigation of the relevant incident is finally resolved.
          </TextBlock>

          <ThirdLevelHeadline text="Cookies" />

          <TextBlock>a) Session cookies</TextBlock>

          <TextBlock>
            We use cookies on our website. Cookies are small text files or other
            storage technologies stored on your computer by your browser. These
            cookies process certain specific information about you, such as your
            browser, location data, or IP address.
          </TextBlock>

          <TextBlock>
            This processing makes our website more user-friendly, efficient, and
            secure, allowing us, for example, to display our website in
            different languages or to offer a shopping cart function.
          </TextBlock>

          <TextBlock>
            The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR,
            insofar as these cookies are used to collect data to initiate or
            process contractual relationships.
          </TextBlock>

          <TextBlock>
            If the processing does not serve to initiate or process a contract,
            our legitimate interest lies in improving the functionality of our
            website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.
          </TextBlock>

          <TextBlock>
            When you close your browser, these session cookies are deleted.
          </TextBlock>

          <TextBlock>b) Third-party cookies</TextBlock>

          <TextBlock>
            If necessary, our website may also use cookies from companies with
            whom we cooperate for the purpose of advertising, analyzing, or
            improving the features of our website.
          </TextBlock>

          <TextBlock>
            Please refer to the following information for details, in particular
            for the legal basis and purpose of such third-party collection and
            processing of data collected through cookies.
          </TextBlock>

          <TextBlock>c) Disabling cookies</TextBlock>

          <TextBlock>
            You can refuse the use of cookies by changing the settings on your
            browser. Likewise, you can use the browser to delete cookies that
            have already been stored. However, the steps and measures required
            vary, depending on the browser you use. If you have any questions,
            please use the help function or consult the documentation for your
            browser or contact its maker for support. Browser settings cannot
            prevent so-called flash cookies from being set. Instead, you will
            need to change the setting of your Flash player. The steps and
            measures required for this also depend on the Flash player you are
            using. If you have any questions, please use the help function or
            consult the documentation for your Flash player or contact its maker
            for support.
          </TextBlock>

          <TextBlock>
            If you prevent or restrict the installation of cookies, not all of
            the functions on our site may be fully usable.
          </TextBlock>

          <ThirdLevelHeadline text="Contact" />

          <TextBlock>
            If you contact us via email or the contact form, the data you
            provide will be used for the purpose of processing your request. We
            must have this data in order to process and answer your inquiry;
            otherwise we will not be able to answer it in full or at all.
          </TextBlock>

          <TextBlock>
            The legal basis for this data processing is Art. 6 Para. 1 lit. b)
            GDPR.
          </TextBlock>

          <TextBlock>
            Your data will be deleted once we have fully answered your inquiry
            and there is no further legal obligation to store your data, such as
            if an order or contract resulted therefrom.
          </TextBlock>

          <ThirdLevelHeadline text="Google Analytics" />

          <TextBlock>
            We use Google Analytics on our website. This is a web analytics
            service provided by Google Inc., Gordon House, Barrow Street, Dublin
            4, Irland (hereinafter: Google).
          </TextBlock>

          <TextBlock>
            Through certification according to the{" "}
            <StyledLink href="https://privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
              EU-US Privacy Shield
            </StyledLink>{" "}
            Google guarantees that it will follow the EU&apos;s data protection
            regulations when processing data in the United States.
          </TextBlock>

          <TextBlock>
            The Google Analytics service is used to analyze how our website is
            used. The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate
            interest lies in the analysis, optimization, and economic operation
            of our site.
          </TextBlock>

          <TextBlock>
            Usage and user-related information, such as IP address, place, time,
            or frequency of your visits to our website will be transmitted to a
            Google server in the United States and stored there. However, we use
            Google Analytics with the so-called anonymization function, whereby
            Google truncates the IP address within the EU or the EEA before it
            is transmitted to the US.
          </TextBlock>

          <p className="margin-10">
            The data collected in this way is in turn used by Google to provide
            us with an evaluation of visits to our website and what visitors do
            once there. This data can also be used to provide other services
            related to the use of our website and of the internet in general.
          </p>

          <TextBlock>
            Google states that it will not connect your IP address to other
            data. In addition, Google provides further information with regard
            to its{" "}
            <StyledLink href="https://google.com/intl/de/policies/privacy/partners">
              data protection practices
            </StyledLink>{" "}
            including options you can exercise to prevent such use of your data.
          </TextBlock>

          <TextBlock>
            In addition, Google offers an{" "}
            <StyledLink href="https://tools.google.com/dlpage/gaoptout?hl=de">
              opt-out add-on
            </StyledLink>{" "}
            in addition with further information. This add-on can be installed
            on the most popular browsers and offers you further control over the
            data that Google collects when you visit our website. The add-on
            informs Google Analytics&apos; JavaScript (ga.js) that no
            information about the website visit should be transmitted to Google
            Analytics. However, this does not prevent information from being
            transmitted to us or to other web analytics services we may use as
            detailed herein.
          </TextBlock>

          <ThirdLevelHeadline text="Google Fonts" />

          <TextBlock>
            Our website uses Google Fonts to display external fonts. This is a
            service provided by Google Inc., Gordon House, Barrow Street, Dublin
            4, Irland (hereinafter: Google).
          </TextBlock>

          <TextBlock>
            Through certification according to the{" "}
            <StyledLink href="https://privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active">
              EU-US Privacy Shield
            </StyledLink>{" "}
            Google guarantees that it will follow the EU&apos;s data protection
            regulations when processing data in the United States.
          </TextBlock>

          <TextBlock>
            To enable the display of certain fonts on our website, a connection
            to the Google server in the USA is established whenever our website
            is accessed.
          </TextBlock>

          <TextBlock>
            The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate
            interest lies in the optimization and economic operation of our
            site.
          </TextBlock>

          <TextBlock>
            When you access our site, a connection to Google is established from
            which Google can identify the site from which your request has been
            sent and to which IP address the fonts are being transmitted for
            display.
          </TextBlock>

          <TextBlock>Google offers detailed information at</TextBlock>

          <ul className="list-disc list-inside mb-4">
            <li>
              <StyledLink href="https://adssettings.google.com/authenticated">
                https://adssettings.google.com/authenticated
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </StyledLink>
            </li>
          </ul>

          <TextBlock>
            in particular on options for preventing the use of data.
          </TextBlock>

          <ThirdLevelHeadline text="CloudFlare" />

          <TextBlock>
            To secure our website and to optimize loading times, we use the
            CloudFlare CDN (content delivery network). This is a service of
            Cloudflare Inc., 101 Townsend Street, San Francisco, California
            94107, USA, hereinafter referred to as &quot;CloudFlare&quot;.
          </TextBlock>

          <TextBlock>
            Through certification according to the{" "}
            <StyledLink href="https://privacyshield.gov/participant?id=a2zt0000000GnZKAA0&status=Active">
              EU-US Privacy Shield
            </StyledLink>{" "}
            CloudFlare guarantees that it will follow the EU&apos;s data
            protection regulations when processing data in the United States.
          </TextBlock>

          <TextBlock>
            The legal basis for collecting and processing this information is
            Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the
            secure operation of our website and in its optimization.
          </TextBlock>

          <TextBlock>
            If you access our website, your queries are forwarded to CloudFlare
            servers. Statistical access data about your visit to our website is
            collected and CloudFlare stores a cookie on your terminal device via
            your browser. Access data includes
          </TextBlock>

          <ul className="list-disc list-inside mb-4">
            <li>your IP address;</li>
            <li>the page(s) on our site that you access;</li>
            <li>type and version of internet browser you are using;</li>
            <li>your operating system;</li>
            <li>
              the website from which you came prior to visiting our website
              (referrer URL);
            </li>
            <li>your length of stay on our site; and</li>
            <li>the frequency with which our pages are accessed.</li>
          </ul>

          <TextBlock>
            The data is used by CloudFlare for statistical evaluations of the
            accesses as well as for the security and optimization of the offer.
          </TextBlock>

          <TextBlock>
            If you do not agree to this processing, you have the option of
            preventing the installation of cookies by making the appropriate
            settings in your browser. Further details can be found in the
            section about cookies above.
          </TextBlock>

          <TextBlock>
            CloudFlare offers further information about its data collection and
            processing as well your rights and your options for{" "}
            <StyledLink href="https://cloudflare.com/privacypolicy/">
              protecting your privacy
            </StyledLink>
            .
          </TextBlock>

          <TextBlock>
            <StyledLink href="https://ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html">
              Model Data Protection Statement
            </StyledLink>{" "}
            for{" "}
            <StyledLink href="https://ratgeberrecht.eu/">
              Anwaltskanzlei Weiß &amp; Partner
            </StyledLink>
          </TextBlock>
        </div>
      </div>
    </>
  </Layout>
);

export default PrivacyPage;

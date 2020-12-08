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

const LegalPage = (): JSX.Element => (
  <Layout page="Legal Disclosure">
    <>
      <div className="flex flex-col">
        <div className="md:mx-auto md:w-2/3 font-mono">
          <FirstLevelHeadline text="Legal Disclosure" />

          <SecondLevelHeadline text="Information in accordance with Section 5 TMG" />

          <Image src="/address.png" alt="Address" style={{ height: "60px" }} />

          <SecondLevelHeadline text="Contact Information" />

          <Image
            src="/contact.png"
            alt="Contact information"
            style={{ height: "40px" }}
          />

          <SecondLevelHeadline text="Disclaimer" />

          <ThirdLevelHeadline text="Accountability for content" />

          <TextBlock>
            The contents of our pages have been created with the utmost care.
            However, we cannot guarantee the contents&apos; accuracy,
            completeness or topicality. According to statutory provisions, we
            are furthermore responsible for our own content on these web pages.
            In this matter, please note that we are not obliged to monitor the
            transmitted or saved information of third parties, or investigate
            circumstances pointing to illegal activity. Our obligations to
            remove or block the use of information under generally applicable
            laws remain unaffected by this as per §§ 8 to 10 of the Telemedia
            Act (TMG).
          </TextBlock>

          <ThirdLevelHeadline text="Accountability for links" />

          <TextBlock>
            Responsibility for the content of external links (to web pages of
            third parties) lies solely with the operators of the linked pages.
            No violations were evident to us at the time of linking. Should any
            legal infringement become known to us, we will remove the respective
            link immediately.
          </TextBlock>

          <ThirdLevelHeadline text="Copyright" />

          <TextBlock>
            Our web pages and their contents are subject to German copyright
            law. Unless expressly permitted by law, every form of utilizing,
            reproducing or processing works subject to copyright protection on
            our web pages requires the prior consent of the respective owner of
            the rights. Individual reproductions of a work are only allowed for
            private use. The materials from these pages are copyrighted and any
            unauthorized use may violate copyright laws.
          </TextBlock>

          <TextBlock>
            <i>Source:</i>{" "}
            <StyledLink href="https://translate-24h.de">
              translate-24h Englisch Übersetzungen
            </StyledLink>
          </TextBlock>
        </div>
      </div>
    </>
  </Layout>
);

export default LegalPage;

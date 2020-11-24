import React from "react";

const LegalDisclosureModal = () => (
  <>
    <h5 className="title is-5">Information in accordance with Section 5 TMG</h5>
    <p>
      <img src="/address.png" alt="test" style={{ height: "60px" }} />
    </p>
    <h6 className="title is-6 margin-10">Contact Information</h6>
    <p>
      <img src="/contact.png" alt="test" style={{ height: "40px" }} />
    </p>
    <h5 className="title is-5 margin-10">Disclaimer</h5>
    <h6 className="title is-6">Accountability for content</h6>
    <p>
      The contents of our pages have been created with the utmost care. However,
      we cannot guarantee the contents&apos; accuracy, completeness or
      topicality. According to statutory provisions, we are furthermore
      responsible for our own content on these web pages. In this matter, please
      note that we are not obliged to monitor the transmitted or saved
      information of third parties, or investigate circumstances pointing to
      illegal activity. Our obligations to remove or block the use of
      information under generally applicable laws remain unaffected by this as
      per §§ 8 to 10 of the Telemedia Act (TMG).
    </p>
    <h6 className="title is-6 margin-10">Accountability for links</h6>
    <p>
      Responsibility for the content of external links (to web pages of third
      parties) lies solely with the operators of the linked pages. No violations
      were evident to us at the time of linking. Should any legal infringement
      become known to us, we will remove the respective link immediately.
    </p>
    <h6 className="title is-6 margin-10">Copyright</h6>
    <p>
      Our web pages and their contents are subject to German copyright law.
      Unless expressly permitted by law, every form of utilizing, reproducing or
      processing works subject to copyright protection on our web pages requires
      the prior consent of the respective owner of the rights. Individual
      reproductions of a work are only allowed for private use. The materials
      from these pages are copyrighted and any unauthorized use may violate
      copyright laws.
    </p>
    <br />
    <p>
      <i>Source: </i>
      <a
        href="http://www.translate-24h.de"
        target="_blank"
        rel="noopener noreferrer"
      >
        translate-24h Englisch Übersetzungen
      </a>
    </p>
  </>
);

export default LegalDisclosureModal;

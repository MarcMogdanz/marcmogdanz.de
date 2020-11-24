import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import LegalDisclosureModal from "./LegalDisclosureModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

import "animate.css";
import "bulma/css/bulma.css";
import "../styles/Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

interface LayoutState {
  legalDisclosureModalHidden: boolean;
  privacyPolicyModalHidden: boolean;
}

class Layout extends React.Component<LayoutProps, LayoutState> {
  constructor(props: { children: React.ReactNode }) {
    super(props);

    this.state = {
      legalDisclosureModalHidden: true,
      privacyPolicyModalHidden: true,
    };
  }

  toggleLegalDisclosureModal(): void {
    this.setState((prevState) => ({
      legalDisclosureModalHidden: !prevState.legalDisclosureModalHidden,
    }));
  }

  togglePrivacyPolicyModal(): void {
    this.setState((prevState) => ({
      privacyPolicyModalHidden: !prevState.privacyPolicyModalHidden,
    }));
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { legalDisclosureModalHidden, privacyPolicyModalHidden } = this.state;

    return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Marc Mogdanz</title>
        </Helmet>

        {!legalDisclosureModalHidden && (
          <Modal
            title="Legal Disclosure"
            closeHandler={() => this.toggleLegalDisclosureModal()}
          >
            <LegalDisclosureModal />
          </Modal>
        )}

        {!privacyPolicyModalHidden && (
          <Modal
            title="Privacy Policy"
            closeHandler={() => this.togglePrivacyPolicyModal()}
          >
            <PrivacyPolicyModal />
          </Modal>
        )}

        {children}

        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with <FontAwesomeIcon icon={faHeart} /> in{" "}
              <Link to="/404">Bielefeld</Link>. Built with{" "}
              <a href="https://gatsbyjs.org/">Gatsby</a> and{" "}
              <a href="https://reactjs.org/">React</a>. Hosted on{" "}
              <a href="https://netlify.com/">Netlify</a>.
            </p>
            <p>
              <div className="field has-addons has-addons-centered">
                <p className="control">
                  <button
                    type="button"
                    className="button"
                    onClick={this.toggleLegalDisclosureModal.bind(this)}
                  >
                    Legal Disclosure
                  </button>
                </p>
                <p className="control">
                  <button
                    type="button"
                    className="button has-text-grey-dark"
                    onClick={this.togglePrivacyPolicyModal.bind(this)}
                  >
                    Privacy Policy
                  </button>
                </p>
              </div>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Layout;

import React from "react";
import PropTypes from "prop-types";
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

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      legalDisclosureModalHidden: true,
      privacyPolicyModalHidden: true,
    };
  }

  toggleLegalDisclosureModal() {
    this.setState(prevState => ({
      legalDisclosureModalHidden: !prevState.legalDisclosureModalHidden,
    }));
  }

  togglePrivacyPolicyModal() {
    this.setState(prevState => ({
      privacyPolicyModalHidden: !prevState.privacyPolicyModalHidden,
    }));
  }

  render() {
    return (
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Marc Mogdanz</title>
        </Helmet>

        {!this.state.legalDisclosureModalHidden && (
          <Modal
            title="Legal Disclosure"
            closeHandler={() => this.toggleLegalDisclosureModal()}
          >
            <LegalDisclosureModal />
          </Modal>
        )}

        {!this.state.privacyPolicyModalHidden && (
          <Modal
            title="Privacy Policy"
            closeHandler={() => this.togglePrivacyPolicyModal()}
          >
            <PrivacyPolicyModal />
          </Modal>
        )}

        {this.props.children}

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
              <a
                href="#"
                className="has-text-grey-dark"
                onClick={this.toggleLegalDisclosureModal.bind(this)}
              >
                Legal Disclosure
              </a>{" "}
              &{" "}
              <a
                href="#"
                className="has-text-grey-dark"
                onClick={this.togglePrivacyPolicyModal.bind(this)}
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

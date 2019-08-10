import React from "react";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faEnvelopeOpenText,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faGitlab, faXing } from "@fortawesome/free-brands-svg-icons";

import Modal from "../components/Modal";
import EmailModal from "../components/EmailModal";
import LegalDisclosureModal from "../components/LegalDisclosureModal";
import PrivacyPolicyModal from "../components/PrivacyPolicyModal";
import BlogPosts from "../components/BlogPosts";
import Projects from "../components/Projects";

import "animate.css";
import "bulma/css/bulma.css";
import "../styles/index.css";

class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      emailModalHidden: true,
      legalDisclosureModalHidden: true,
      privacyPolicyModalHidden: true,
    };
  }

  toggleEmailModal() {
    this.setState(prevState => ({
      emailModalHidden: !prevState.emailModalHidden,
    }));
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
          <title>test title</title>
        </Helmet>

        {!this.state.emailModalHidden && (
          <Modal title="Contact" closeHandler={() => this.toggleEmailModal()}>
            <EmailModal />
          </Modal>
        )}

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

        <div
          className="level"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "100vh",
            position: "relative",
          }}
        >
          <div
            className="level-item has-text-centered"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <h1 className="subtitle is-1 name">Marc Mogdanz</h1>
              <h5 className="subtitle is-5 job-title">Backend Developer</h5>

              <nav
                className="level is-mobile"
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">GitHub</p>
                    <a
                      href="https://github.com/MarcMogdanz"
                      className="has-text-grey-dark"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="icon is-medium"
                        style={{ color: "grey-dark" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">GitLab</p>
                    <a
                      href="https://gitlab.com/MarcMogdanz"
                      className="has-text-grey-dark"
                    >
                      <FontAwesomeIcon
                        icon={faGitlab}
                        className="icon is-medium"
                      />
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Xing</p>
                    <a
                      href="https://xing.com/profile/Marc_Mogdanz"
                      className="has-text-grey-dark"
                    >
                      <FontAwesomeIcon
                        icon={faXing}
                        className="icon is-medium"
                      />
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">PGP</p>
                    <a href="https://" className="has-text-grey-dark">
                      <FontAwesomeIcon
                        icon={faKey}
                        className="icon is-medium"
                      />
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Resume</p>
                    <a href="https://" className="has-text-grey-dark">
                      <FontAwesomeIcon
                        icon={faFileCode}
                        className="icon is-medium"
                      />
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">Mail</p>
                    <a
                      href="#"
                      className="has-text-grey-dark"
                      onClick={this.toggleEmailModal.bind(this)}
                    >
                      <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                        className="icon is-medium"
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Projects</h1>
              <h2 className="subtitle">Stuff I&apos;ve worked on</h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="columns is-multiline">
            <Projects />
          </div>
        </div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Blog articles</h1>
              <h2 className="subtitle">Stuff I&apos;ve written</h2>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="columns is-multiline">
            <BlogPosts />
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with <FontAwesomeIcon icon={faHeart} /> in{" "}
              <a href="/404">Bielefeld</a>. Built with{" "}
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

export default IndexPage;

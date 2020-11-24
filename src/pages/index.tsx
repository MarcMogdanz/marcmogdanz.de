import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faXing,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import EmailModal from "../components/EmailModal";

import "../styles/index.css";

interface IndexPageProps {
  children: React.ReactNode;
}

interface IndexPageState {
  emailModalHidden: boolean;
}

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
  constructor(props: IndexPageProps) {
    super(props);

    this.state = {
      emailModalHidden: true,
    };
  }

  toggleEmailModal(): void {
    this.setState((prevState) => ({
      emailModalHidden: !prevState.emailModalHidden,
    }));
  }

  render(): React.ReactNode {
    const { emailModalHidden } = this.state;

    return (
      <>
        <Layout>
          {!emailModalHidden && (
            <Modal title="Contact" closeHandler={() => this.toggleEmailModal()}>
              <EmailModal />
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
                <h5 className="subtitle is-5 job-title">Software Developer</h5>

                <nav
                  className="level is-mobile"
                  style={{
                    marginTop: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading social-icon">GitHub</p>
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
                      <p className="heading social-icon">GitLab</p>
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
                      <p className="heading social-icon">Xing</p>
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
                      <p className="heading social-icon">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/marc-mogdanz/"
                        className="has-text-grey-dark"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedinIn}
                          className="icon is-medium"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading social-icon">Mail</p>
                      <button
                        type="button"
                        className="button is-link is-light has-background-light has-text-grey-dark"
                        onClick={this.toggleEmailModal.bind(this)}
                      >
                        <FontAwesomeIcon
                          icon={faEnvelopeOpenText}
                          className="icon is-medium"
                        />
                      </button>
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
                <h2 className="subtitle">
                  Everything I&apos;ve open sourced over the years
                </h2>
              </div>
            </div>
          </section>

          <div className="container">
            <div className="columns is-multiline">
              <Projects />
            </div>
          </div>
        </Layout>
      </>
    );
  }
}

export default IndexPage;

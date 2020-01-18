import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGitlab,
  faXing,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Modal from "../components/Modal";
import EmailModal from "../components/EmailModal";

import "../styles/index.css";

class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      emailModalHidden: true,
    };
  }

  toggleEmailModal() {
    this.setState(prevState => ({
      emailModalHidden: !prevState.emailModalHidden,
    }));
  }

  render() {
    return (
      <>
        <Layout>
          {!this.state.emailModalHidden && (
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
                      <p className="heading social-icon">Telegram</p>
                      <a
                        href="http://t.me/ItsMarc"
                        className="has-text-grey-dark"
                      >
                        <FontAwesomeIcon
                          icon={faTelegramPlane}
                          className="icon is-medium"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="level-item has-text-centered">
                    <div>
                      <p className="heading social-icon">Mail</p>
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

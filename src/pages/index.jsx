import React from "react";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faXing } from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/Layout";
import Modal from "../components/Modal";
import EmailModal from "../components/EmailModal";
import BlogPosts from "../components/BlogPosts";
import Projects from "../components/Projects";

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
          <Helmet>
            <title>Marc Mogdanz</title>
          </Helmet>

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
        </Layout>
      </>
    );
  }
}

export default IndexPage;

import React from "react";

import Layout from "../components/Layout";

import "../styles/404.css";

const NotFoundPage = (): JSX.Element => (
  <Layout>
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
          <h1 className="subtitle is-1 not-found">404</h1>
          <h5 className="subtitle is-5 not-found-sub">
            That didn&apos;t work out, did it?
          </h5>
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;

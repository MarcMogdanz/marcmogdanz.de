import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = (): JSX.Element => (
  <Layout page="404">
    <div className="flex flex-col mt-20 md:mt-32 lg:mt-56">
      <div className="mx-auto">
        <div className="text-5xl font-mono">404</div>
      </div>
      <div className="mx-auto mt-3">
        <div className="italic font-semibold">
          That didn&apos;t work out, did it?
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;

import React from "react";
import Layout from "../components/Layout";
import { StyledLink } from "../components/Link";

const CreditsPage = (): JSX.Element => (
  <Layout page="Credits">
    <div className="flex flex-col mt-6 px-4">
      <div className="md:mx-auto md:w-2/3">
        <ul className="list-disc">
          <li>
            Hosted on <StyledLink href="https://vercel.com">Vercel</StyledLink>
          </li>
          <li>
            Built with{" "}
            <StyledLink href="https://gatsbyjs.com">Gatsby</StyledLink> and{" "}
            <StyledLink href="https://reactjs.org">React</StyledLink>
          </li>
          <li>
            Styled with{" "}
            <StyledLink href="https://tailwindcss.com">Tailwind</StyledLink> and{" "}
            <StyledLink href="https://fontawesome.com">Font Awesome</StyledLink>
          </li>
          <li>
            Sidebar inspired by a{" "}
            <StyledLink href="https://twitter.com/calebporzio/status/1151876736931549185">
              tweet
            </StyledLink>{" "}
            of{" "}
            <StyledLink href="https://calebporzio.com">Caleb Porzio</StyledLink>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
);

export default CreditsPage;

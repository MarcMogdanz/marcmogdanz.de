import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { NavigationItems, SocialProfiles } from "../constants";
import { StyledLink } from "./Link";

const SocialProfile = ({
  link,
  icon,
}: {
  link: string;
  icon: IconProp;
}): JSX.Element => (
  <div className="px-2 transition duration-300 transform hover:-translate-y-3 hover:scale-150">
    <StyledLink href={link}>
      <FontAwesomeIcon icon={icon} size="2x" color="white" />
    </StyledLink>
  </div>
);

const MenuItem = ({ name, to }: { name: string; to: string }): JSX.Element => (
  <Link
    to={to}
    className="mx-2 border-solid border-b-4 border-transparent hover:border-primary"
  >
    {name}
  </Link>
);

// TODO: remove border under header/navigation links

const Layout = ({
  page,
  children,
}: {
  page: string;
  children: React.ReactNode;
}): JSX.Element => {
  const {
    site: {
      siteMetadata: { title },
    },
  }: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <Helmet>
        <title>
          {title} - {page}
        </title>
      </Helmet>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* sidebar */}
        <div className="flex-shrink-0 w-screen py-8 md:w-96 md:h-screen md:top-0 md:sticky md:p-4 md:pt-8 bg-primary">
          <Link to="/">
            <h1 className="text-center text-white text-5xl font-shrimp tracking-wide">
              <div>MARC</div>
              <div>MOGDANZ</div>
            </h1>
          </Link>

          <div className="flex flex-row justify-center pt-10">
            {SocialProfiles.map((profile) => (
              <SocialProfile
                link={profile.link}
                icon={profile.icon}
                key={profile.link}
              />
            ))}
          </div>

          <div className="absolute inset-x-0 bottom-0 hidden md:flex">
            <footer className="m-auto mb-2 text-center font-mono md:text-white">
              {/* footer in sidebar */}
              <>
                <div>
                  Made with{" "}
                  <FontAwesomeIcon icon={faHeart} className="text-red-300" /> in
                  Bielefeld
                </div>
                <div>
                  <Link to="/credits">Credits</Link>
                </div>
                <div>
                  <Link to="/legal">Legal Disclosure</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>
                </div>
              </>
            </footer>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col flex-grow min-h-full justify-between bg-background">
          <header className="p-4">
            <div className="flex justify-center font-mono">
              {NavigationItems.map((item) => (
                <MenuItem name={item.name} to={item.to} key={item.name} />
              ))}
            </div>
          </header>

          <main className="p-4 mb-auto h-auto border-t-2 border-solid border-primary">
            {children}
          </main>

          <footer className="text-center font-mono p-4 flex flex-col md:hidden ">
            {/* footer in main page */}
            <>
              <div>
                Made with{" "}
                <FontAwesomeIcon icon={faHeart} className="text-red-300" /> in
                Bielefeld
              </div>
              <div>
                <Link to="/credits">Credits</Link>
              </div>
              <div>
                <Link to="/legal">Legal Disclosure</Link> and{" "}
                <Link to="/privacy">Privacy Policy</Link>
              </div>
            </>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Layout;

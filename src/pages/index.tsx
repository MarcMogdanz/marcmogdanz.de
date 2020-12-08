import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { LocalStyledLink, StyledLink } from "../components/Link";
import { NavigationItems, SocialProfiles } from "../constants";

const SocialProfile = ({
  link,
  icon,
}: {
  link: string;
  icon: IconProp;
}): JSX.Element => (
  <div className="px-3 transition duration-300 transform hover:xtranslate-y-3 hover:scale-125">
    <StyledLink href={link}>
      <FontAwesomeIcon
        icon={icon}
        size="3x"
        className="transition duration-300 text-white"
      />
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

const IndexPage = (): JSX.Element => {
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
        <title>{title}</title>
      </Helmet>

      <div className="flex flex-col w-screen h-screen bg-background relative">
        <div className="m-auto">
          <div className="text-5xl font-mono italic">Marc Mogdanz</div>

          <div className="flex pt-3">
            <div className="mx-auto flex flex-row">
              {NavigationItems.map((item) => (
                <MenuItem name={item.name} to={item.to} key={item.name} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 flex bg-primary py-3">
          <div className="mx-auto flex flex-row ">
            {SocialProfiles.map((profile) => (
              <SocialProfile
                link={profile.link}
                icon={profile.icon}
                key={profile.link}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex">
          <footer className="m-auto p-auto text-center font-mono">
            <LocalStyledLink to="/legal">Legal Disclosure</LocalStyledLink> and{" "}
            <LocalStyledLink to="/privacy">Privacy Policy</LocalStyledLink>
          </footer>
        </div>
      </div>
    </>
  );
};

export default IndexPage;

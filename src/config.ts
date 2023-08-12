import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://marcmogdanz.de/",
  author: "Marc Mogdanz",
  desc: "Tech blog by Marc Mogdanz.",
  title: "Marc Mogdanz",
  ogImage: "", // TODO
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/marcmogdanz",
    linkTitle: "GitHub",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/marc-mogdanz",
    linkTitle: "LinkedIn",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:contact@marcmogdanz.de",
    linkTitle: "Send me an email",
    active: true,
  },
];

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faXing,
} from "@fortawesome/free-brands-svg-icons";

// Social Profiles
interface SocialProfile {
  link: string;
  icon: IconProp;
}

const GitHub: SocialProfile = {
  link: "https://github.com/MarcMogdanz",
  icon: faGithub,
};

const GitLab: SocialProfile = {
  link: "https://gitlab.com/MarcMogdanz",
  icon: faGitlab,
};

const XING: SocialProfile = {
  link: "https://xing.com/profile/Marc_Mogdanz",
  icon: faXing,
};

const LinkedIn: SocialProfile = {
  link: "https://linkedin.com/in/marc-mogdanz",
  icon: faLinkedin,
};

const SocialProfiles: SocialProfile[] = [GitHub, GitLab, XING, LinkedIn];

// Navigation Items
interface NavigationItem {
  name: string;
  to: string;
}

const Home: NavigationItem = {
  name: "Home",
  to: "/",
};

const Contact: NavigationItem = {
  name: "Contact",
  to: "/contact",
};

const NavigationItems: NavigationItem[] = [Home, Contact];

export { SocialProfiles, NavigationItems };

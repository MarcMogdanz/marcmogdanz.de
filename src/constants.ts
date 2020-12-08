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

export { NavigationItems };

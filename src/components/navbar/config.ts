import { navItem } from "@/types/navigation";

export const navItems: navItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Groups",
    href: "/groups",
  },
];

export const logggedInNavItems: navItem[] = [
  { name: "Profile", href: "/profile" },
  { name: "Create Group", href: "/create-group" },
  { name: "Logout", href: "/logout" },
];

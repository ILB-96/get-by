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
  { name: "My Groups", href: "/groups/active" },
  { name: "Create Group", href: "/groups/create" },
  { name: "Settings", href: "/profile" },
];

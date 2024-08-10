import { navItem } from "@/types/navigation";

export const navItems: navItem[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Groups",
    href: "/groups",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const sessionNavItems: navItem[] = [
  { name: "My Groups", href: "/groups/active" },
  { name: "Create Group", href: "/groups/create" },
  { name: "Settings", href: "/profile" },
];

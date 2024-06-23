export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Acme Inc",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: {
    public: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Contact",
        href: "/contact",
      },
      // {
      //   label: "Pricing",
      //   href: "/pricing",
      // },
    ],
    dashboard: [
      {
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        label: "Profile",
        href: "/profile",
      },
      {
        label: "Settings",
        href: "/settings",
      },
      // {
      //   label: "Users",
      //   href: "/users",
      // },
    ],
  },
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

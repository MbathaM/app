export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Acme Co",
  description: "Make beautiful websites regardless of your design experience.",
  author: {
    name: "Melusi Mbatha",
    email: "me@mbathamelusi.co.za",
    url: "https://mbathamelusi.co.za",
  },
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
      {
        label: "Blog",
        href: "/blog",
      },
    ],
  },
  links: {
    github: "https://github.com/mbathamelusi",
    twitter: "https://twitter.com/mbathamelusi",
    docs: "https://mbathamelusi.co.za/docs",
  },
};

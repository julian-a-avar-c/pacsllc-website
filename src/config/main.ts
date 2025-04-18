export type Card = {
  icon: string | null;
  title: string;
  description: string;
};

export type Page = {
  name: string;
  href: string;
  title?: string;
};

//   export type Pages = (
//     | PageIndex
//     | PageAbout
//     | (Page & { name: "products" })
//     | (Page & { name: "services" })
//     | PageArticles
//   )[];

//   export type PageNames = Pages[number]["name"];

//   export type PagesByName = {
//     index: PageIndex;
//     about: PageAbout;
//     products: PageProducts;
//     services: PageServices;
//     articles: PageArticles;
//   };

export default {
  title: "Processing & Automation Consultancy Solutions",
  shortTitle: "PACS LLC",
  links: [
    { type: "site", href: "https://pacsllc.net" },
    {
      type: "linkedin",
      icon: "fa6-brands:linkedin",
      value: "pacsllc",
      href: "https://www.linkedin.com/company/pacsllc/",
    },
    {
      type: "instagram",
      icon: "fa6-brands:instagram",
      value: "pacs_llc",
      href: "https://www.instagram.com/pacs_llc/",
    },
    {
      type: "phone",
      icon: "fa6-solid:phone",
      value: "(773) 474-9701",
      href: "tel:+17734749701",
    },
    {
      type: "email",
      icon: "fa6-solid:envelope",
      value: "info@pacsllc.net",
      href: "mailto:info@pacsllc.net",
    },
    { type: "location", icon: "fa6-solid:map-location", value: "NY / NJ" }, // FIX
  ],
};

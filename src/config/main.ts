import { config as productsConfig } from "@/config/pages/products";
import { config as servicesConfig } from "@/config/pages/services";

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

type ContactInfo = {
  icon?: string;
  value?: string;
  href?: string;
};

type Config = {
  title: string;
  shortTitle: string;
  links: {
    [type in
      | "site"
      | "linkedin"
      | "instagram"
      | "phone"
      | "email"
      | "location"]: ContactInfo;
  };
  nav: {
    services: typeof servicesConfig.services;
    products: {
      liquidLubricants: typeof productsConfig.products.liquidLubricants;
      greases: typeof productsConfig.products.greases;
    };
  };
};

const config: Config = {
  title: "Process & Automation Consultancy Solutions",
  shortTitle: "PACS LLC",
  links: {
    site: {
      href: "https://pacsllc.net",
    },
    linkedin: {
      icon: "fa6-brands:linkedin",
      value: "pacsllc",
      href: "https://www.linkedin.com/company/pacsllc/",
    },
    instagram: {
      icon: "fa6-brands:instagram",
      value: "pacs_llc",
      href: "https://www.instagram.com/pacs_llc/",
    },
    phone: {
      icon: "fa6-solid:phone",
      value: "(773) 474-9701",
      href: "tel:+17734749701",
    },
    email: {
      icon: "fa6-solid:envelope",
      value: "info@pacsllc.net",
      href: "mailto:info@pacsllc.net",
    },
    location: {
      icon: "fa6-solid:map-location",
      value: "NY / NJ",
    },
  },
  nav: {
    services: servicesConfig.services,
    products: {
      liquidLubricants: productsConfig.products.liquidLubricants,
      greases: productsConfig.products.greases,
    },
  },
};

export default config;

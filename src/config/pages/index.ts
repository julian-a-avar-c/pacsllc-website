import type { Page, Card } from "@/config/main";

type Config = Page & {
  name: "index";
  landingHero: {
    title: string;
    buttons: {
      name: string;
      value: string;
      href: string;
    }[];
  };
  cards: Card[];
  services: {
    title: string;
    description: string;
    items: Card[];
  };
  content: {
    mission: { title: string; content: string };
    vision: { title: string; content: string };
  };
  products: {
    title: string;
    description: string;
    items: Card[];
  };
};

export default {
  name: "index",
  href: "/",
  landingHero: {
    title: "",
    buttons: [
      {
        name: "button",
        value: "Talk to Sales",
        href: "mailto:info@pacsllc.net",
      },
      {
        name: "connectOnLinkedin",
        value: "Connect on LinkedIn",
        href: "https://www.linkedin.com/company/pacsllc/",
      },
      {
        name: "connectOnLinkedinShort",
        value: "Connect!",
        href: "https://www.linkedin.com/company/pacsllc/",
      },
    ],
  },
  cards: [
    {
      icon: "fa6-solid:circle-check",
      title: "Solutions",
      description:
        "Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work",
    },
    {
      icon: "fa6-solid:gears",
      title: "Systems",
      description:
        "We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning.",
    },
    {
      icon: "fa6-solid:key",
      title: "Turnkey",
      description:
        "Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
  ],
  services: {
    title: "Services",
    description:
      "Distinctio fugiat dolor, nesciunt pariatur excepturi consectetur consequatur ipsum eum, eius quos perspiciatis ex nisi laudantium. Optio deleniti mollitia molestiae.\nSimilique natus sed tempora rerum deleniti mollitia dicta doloribus quo.",
    items: [
      {
        icon: "fa6-solid:angle-right",
        title: "Service 1",
        description:
          "Veniam exercitation eiusmod nostrud nisi nulla ex anim reprehenderit qui. Elit laboris est dolore commodo adipisicing proident incididunt velit elit qui ad excepteur proident ut. Consectetur incididunt enim et est consequat. Dolor dolore do quis mollit commodo voluptate ut incididunt magna culpa.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "Service 2",
        description:
          "Laborum fugiat fugiat commodo laborum ea exercitation non Lorem. Eu ad est laborum laboris voluptate occaecat consectetur proident ad. Reprehenderit amet sunt consequat nisi id veniam elit incididunt elit. Labore ut consectetur amet eu consequat pariatur sit laborum Lorem ipsum veniam nulla ad. Laborum consectetur occaecat aliqua pariatur.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "Service 3",
        description:
          "Labore fugiat nulla Lorem in pariatur dolor aliquip qui eu dolor. Fugiat incididunt non anim. Nisi quis enim incididunt velit excepteur ex officia qui reprehenderit qui eiusmod do duis voluptate id. Ea Lorem culpa esse laboris qui. In occaecat eiusmod cupidatat commodo labore excepteur occaecat.",
      },
    ],
  },
  content: {
    mission: {
      title: "PACS Mission",
      content:
        " Our solutions are proven and designed based on the best practices in the fine art of engineering and are backed by our long experience in field work. We build our systems in a modular fashion and deliver them fully factory tested prior to shipping for rapid commissioning. Our turnkey modular approach results in successful quick implementation with an efficient high rate of return on investment.",
    },
    vision: {
      title: "PACS Vision",
      content:
        "PACS understands that having a single source of project support simplifies and expedites decision-making, coordination, and execution. PACS consolidates responsibilities for engineering, procurement, installation inspection and start-up assistance, and can provide turnkey blending and manufacturing solutions. From the outskirts of New York City we serve the world. ",
    },
  },
  products: {
    title: "Products",
    description: `<p>PACS delivers modular automation and logistics solutions engineered to slash energy spend, optimize labor, and adapt seamlessly to shifting demands. Built for agile industries: scalable, portable, and operator-free.</p>
        <p><em>Automation simplified. Productivity amplified.</em><p>`,
    items: [
      {
        icon: "fa6-solid:angle-right",
        title: "RDU",
        description:
          "Fully automated decanting—zero operators needed. Self-identifies barcodes, precision-aligns lance with drum bung.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "C3BU",
        description:
          "Skid-mounted lubricant blender. Container-portable, operator-free blending—deploy anywhere, anytime.",
      },
      {
        icon: "fa6-solid:angle-right",
        title: "ARCU",
        description:
          "High-temp efficiency without hot oil systems. Slashes energy costs in thermal processes.",
      },
    ],
  },
} satisfies Config;

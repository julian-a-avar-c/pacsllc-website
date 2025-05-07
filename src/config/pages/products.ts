export type Item = {
  title: string;
  key: string;
  shortDescription: string;
  mediumDescription: string;
  longDescription: string;
  href: string;
};

export const config: {
  products: {
    liquidLubricants: {
      item: Item;
      items: Item[];
    };
    greases: {
      item: Item;
      items: Item[];
    };
  };
} = {
  products: {
    liquidLubricants: {
      item: {
        title: "Liquid Lubricants",
        key: "products-liquid-lubricants",
        shortDescription: "All liquid lubricant products",
        mediumDescription: "",
        longDescription: "",
        href: "/products#liquid-lubricants",
      },
      items: [
        // En lubricantes liquidos
        // 1) RDU (Robotic Drum Unit)
        // 2) ILB/SMB (In line Blender / Simultaneous Metered Blender)
        // 3) Piggable Transfer System
        // 3a) HLDV (Head Line Distribution Valve)
        // 3b) ILDV (Intermediate Line Distribution Valve)
        // 3c) T-Ring Valve
        // 3d) Piggable distribution Manifolds
        // 4) DCS (Distributed Control Systems)
        // 5) PPM (Parts Per Million) dosing systems
        // 6) ICSC( In Line Compact Static Cavitation Mixers)
        // 7) 3CBU (Compact Blending Unit)
        {
          title: "RDU",
          key: "rdu",
          shortDescription: "Robotic Drum Unit",
          mediumDescription:
            "Fully automated decanting—zero operators needed. Self-identifies barcodes, precision-aligns lance with drum bung.",
          longDescription: "",
          href: "/products#rdu",
        },
        {
          title: "ILB/SMB",
          key: "ilb-smb",
          shortDescription: "In Line Blender / Simultaneous Metered Blender",
          mediumDescription: "",
          longDescription: "",
          href: "/products#ilb-smb",
        },
        {
          title: "Piggable Transfer System",
          key: "piggable-transfer-system",
          shortDescription: "Piggable Transfer System",
          mediumDescription: "",
          longDescription: "",
          href: "/products#piggable-transfer-system",
        },
        {
          title: "ICSC",
          key: "icsc",
          shortDescription: "In Line Compact Static Cavitation Mixers",
          mediumDescription: "",
          longDescription: "",
          href: "/products#icsc",
        },
        {
          title: "3CBU",
          key: "3cbu",
          shortDescription: "Compact Blending Unit",
          mediumDescription:
            "Fully automated decanting—zero operators needed. Self-identifies barcodes, precision-aligns lance with drum bung.",
          longDescription: "",
          href: "/products#3cbu",
        },
      ],
    },
    greases: {
      item: {
        title: "Greases",
        key: "products-grease",
        shortDescription: "All grease products",
        mediumDescription: "",
        longDescription: "",
        href: "/products#greases",
      },
      items: [
        // En lubricantes solidos (grasas)
        // 1) Saponification Reactor
        // 1a) Contactor
        // 1b) Autoclave
        // 2) Finishing Kettles
        // 3) Homogenizers
        // 4) Coloidal mills
        // 5) Grease filtration
        // 6) Scrubbers
        // 7) Control Systems
        {
          title: "Saponification Reactor",
          key: "saponification-reactor",
          shortDescription: "Saponification Reactor",
          mediumDescription: "",
          longDescription: "",
          href: "/products#saponification-reactor",
        },
        {
          title: "Contactor",
          key: "contactor",
          shortDescription: "Contactor",
          mediumDescription: "",
          longDescription: "",
          href: "/products#contactor",
        },
        {
          title: "Autoclave",
          key: "autoclave",
          shortDescription: "Autoclave",
          mediumDescription: "",
          longDescription: "",
          href: "/products#autoclave",
        },
        {
          title: "Finishing Kettles",
          key: "finishing-kettles",
          shortDescription: "Finishing Kettles",
          mediumDescription: "",
          longDescription: "",
          href: "/products#finishing-kettles",
        },
        {
          title: "Homogenizers",
          key: "homogenizers",
          shortDescription: "Homogenizers",
          mediumDescription: "",
          longDescription: "",
          href: "/products#homogenizers",
        },
        {
          title: "Coloidal mills",
          key: "coloidal-mills",
          shortDescription: "Coloidal mills",
          mediumDescription: "",
          longDescription: "",
          href: "/products#coloidal-mills",
        },
        {
          title: "Grease filtration",
          key: "grease-filtration",
          shortDescription: "Grease filtration",
          mediumDescription: "",
          longDescription: "",
          href: "/products#grease-filtration",
        },
        {
          title: "Scrubbers",
          key: "scrubbers",
          shortDescription: "Scrubbers",
          mediumDescription: "",
          longDescription: "",
          href: "/products#scrubbers",
        },
        {
          title: "Control Systems",
          key: "control-systems",
          shortDescription: "Control Systems",
          mediumDescription: "",
          longDescription: "",
          href: "/products#control-systems",
        },
      ],
    },
  },
};

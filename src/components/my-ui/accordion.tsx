import mainConfig from "@/config/main";

import {
  Accordion as UIAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Item } from "@/config/pages/products";
import { cn } from "@/lib/utils";

type Props = {
  list: {
    items: Item[];
  };
};

function Accordion({ list }: Props) {
  return (
    <UIAccordion type="single" collapsible className="w-full">
      {list.items.map((item) => (
        <AccordionItem value={item.key} key={item.key}>
          <AccordionTrigger>
            <span>
              <span className={cn("font-bold")}>{item.title}</span>
              {item.shortDescription && (
                <span className={cn("font-medium")}>
                  {" - "}
                  {item.shortDescription}
                </span>
              )}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <p className={cn("font-light")}>{item.mediumDescription}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
      {/* <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem> */}
    </UIAccordion>
  );
}

export { Accordion };

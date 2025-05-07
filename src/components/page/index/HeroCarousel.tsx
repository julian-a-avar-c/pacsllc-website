"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import mainConfig from "@/config/main";
import { config as pageConfig } from "@/config/pages/index";

import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type HeroCarouselProps = {
  data: typeof pageConfig.cards;
};

export function HeroCarousel({ data }: HeroCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full *:h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className={cn("h-full")}>
        {data.map((card, index) => (
          <CarouselItem key={index}>
            <Card
              className={cn(
                "w-full h-full",
                "hover:bg-card/30 border/40",
                // "backdrop-blur-md",
                "text-shadow-lg/10 text-shadow-white",
                "p-0",
                "shadow-none",
                "gap-4",
              )}
            >
              <CardHeader className={cn("flex items-center gap-4", "p-0")}>
                <Icon
                  icon={card.icon}
                  className="aspect-square"
                  fontSize={32}
                />
                <CardTitle className="text-xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent
                className={cn("text-lg sm:text-xl lg:text-sm", "p-0")}
              >
                <p>{card.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}

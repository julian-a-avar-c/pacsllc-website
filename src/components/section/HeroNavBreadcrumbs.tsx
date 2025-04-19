import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { intersperse } from "@/lib/utils";
import type { ReactNode } from "react";

type HeroNavBreadcrumbsProps = {
  itemKey: string;
  items: { href?: string; node: ReactNode }[];
  className?: string;
};

export function HeroNavBreadcrumbs({
  itemKey,
  items,
  className,
}: HeroNavBreadcrumbsProps) {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {intersperse(
          items.map((item, i) => {
            const { href, node } = item;
            return (
              <BreadcrumbItem key={`${itemKey}-${i}`}>
                {href ? (
                  <BreadcrumbLink href={href}>{node}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{node}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            );
          }),
          (prev, index) => (
            <BreadcrumbSeparator key={`breadcrumb-separator-${index}`} />
          ),
        ).toArray()}

        {/* <BreadcrumbItem>
          <BreadcrumbLink href="/">PACS LLC</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>About</BreadcrumbPage>
        </BreadcrumbItem> */}
      </BreadcrumbList>
    </Breadcrumb>

    // <Breadcrumb>
    //   <BreadcrumbList>
    //     <BreadcrumbItem>
    //       <BreadcrumbLink href="/">Home</BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbSeparator />
    //     <BreadcrumbItem>
    //       <DropdownMenu>
    //         <DropdownMenuTrigger className="flex items-center gap-1">
    //           <BreadcrumbEllipsis className="h-4 w-4" />
    //           <span className="sr-only">Toggle menu</span>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="start">
    //           <DropdownMenuItem>Documentation</DropdownMenuItem>
    //           <DropdownMenuItem>Themes</DropdownMenuItem>
    //           <DropdownMenuItem>GitHub</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //     </BreadcrumbItem>
    //     <BreadcrumbSeparator />
    //     <BreadcrumbItem>
    //       <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbSeparator />
    //     <BreadcrumbItem>
    //       <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    //     </BreadcrumbItem>
    //   </BreadcrumbList>
    // </Breadcrumb>
  );
}

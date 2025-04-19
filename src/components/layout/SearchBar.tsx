"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

export type SearchBarProps = {
    class?: string,
}

export function SearchBar({ class: className }: SearchBarProps) {
  return (
    <Input className={cn(className)} placeholder="Search site"/>
  )
}

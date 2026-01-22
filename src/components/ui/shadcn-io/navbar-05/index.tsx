"use client";

import { BellIcon, ChevronDownIcon, HelpCircleIcon } from "lucide-react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Logo } from "../navbar-01";
import Link from "next/link";

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="Menu"
    role="img"
    className={cn("pointer-events-none", className)}
    fill="none"
    height={16}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width={16}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
      d="M4 12L20 12"
    />
    <path
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
      d="M4 12H20"
    />
    <path
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
      d="M4 12H20"
    />
  </svg>
);

// Info Menu Component
const InfoMenu = ({
  onItemClick,
}: {
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="h-9 w-9" size="icon" variant="ghost">
        <HelpCircleIcon className="h-4 w-4" />
        <span className="sr-only">Help and Information</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>Help & Support</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("help")}>
        Help Center
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("documentation")}>
        Documentation
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("contact")}>
        Contact Support
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("feedback")}>
        Send Feedback
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Notification Menu Component
const NotificationMenu = ({
  notificationCount = 3,
  onItemClick,
}: {
  notificationCount?: number;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="relative h-9 w-9" size="icon" variant="ghost">
        <BellIcon className="h-4 w-4" />
        {notificationCount > 0 && (
          <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center p-0 text-xs">
            {notificationCount > 9 ? "9+" : notificationCount}
          </Badge>
        )}
        <span className="sr-only">Notifications</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-80">
      <DropdownMenuLabel>Notifications</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("notification1")}>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">New message received</p>
          <p className="text-muted-foreground text-xs">2 minutes ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("notification2")}>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">System update available</p>
          <p className="text-muted-foreground text-xs">1 hour ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("notification3")}>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Weekly report ready</p>
          <p className="text-muted-foreground text-xs">3 hours ago</p>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("view-all")}>
        View all notifications
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// User Menu Component
const UserMenu = ({
  userName = "Ramesh Kumar",
  userEmail = "remesh@example.com",
  userAvatar,
  onItemClick,
}: {
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  onItemClick?: (item: string) => void;
}) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        className="hover:bg-accent hover:text-accent-foreground h-9 px-2 py-0"
        variant="ghost"
      >
        <Avatar className="h-7 w-7">
          <AvatarImage alt={userName} src={userAvatar} />
          <AvatarFallback className="text-xs">
            {userName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <ChevronDownIcon className="ml-1 h-3 w-3" />
        <span className="sr-only">User menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56">
      <DropdownMenuLabel>
        <div className="flex flex-col space-y-1">
          <p className="text-sm leading-none font-medium">{userName}</p>
          <p className="text-muted-foreground text-xs leading-none">
            {userEmail}
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("profile")}>
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("settings")}>
        Settings
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => onItemClick?.("billing")}>
        Billing
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => onItemClick?.("logout")}>
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Types
export interface Navbar05NavItem {
  href: string;
  label: string;
}

export interface Navbar05Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar05NavItem[];
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  notificationCount?: number;
  onNavItemClick?: (href: string) => void;
  onInfoItemClick?: (item: string) => void;
  onNotificationItemClick?: (item: string) => void;
  onUserItemClick?: (item: string) => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar05NavItem[] = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
];

export const Navbar05 = React.forwardRef<HTMLElement, Navbar05Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = defaultNavigationLinks,
      userName = "Ramesh Kumar",
      userEmail = "john@example.com",
      userAvatar,
      notificationCount = 3,
      onNavItemClick,
      onInfoItemClick,
      onNotificationItemClick,
      onUserItemClick,
      ...props
    },
    ref,
  ) => {
    return (
      <header
        className={cn(
          "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b px-4 backdrop-blur md:px-6 [&_*]:no-underline",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* --- LEFT SIDE (Hamburger + Logo + Desktop Nav) --- */}
          <div className="flex items-center gap-2">
            {/* MOBILE: Hamburger Trigger (Hidden on Desktop via CSS) */}
            <div className="md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group hover:bg-accent hover:text-accent-foreground h-9 w-9"
                    size="icon"
                    variant="ghost"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem className="w-full" key={index}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={link.href}
                              className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors"
                              onClick={() => {
                                if (onNavItemClick) onNavItemClick(link.href);
                              }}
                            >
                              {link.label}
                            </Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            </div>

            {/* LOGO */}
            <div className="flex items-center gap-6">
              <Link
                href={logoHref}
                className="text-primary hover:text-primary/90 flex cursor-pointer items-baseline gap-2 transition-colors"
              >
                <div className="text-2xl">{logo}</div>
                <span className="hidden text-xl font-bold sm:inline-block">
                  KrishiVeda
                </span>
              </Link>

              {/* DESKTOP: Navigation (Hidden on Mobile via CSS) */}
              <div className="hidden md:flex">
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary group bg-background focus:bg-accent focus:text-accent-foreground inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                            onClick={() => {
                              if (onNavItemClick) onNavItemClick(link.href);
                            }}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE (User Actions) --- */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {/* Info menu */}
              {/* Ensure these components exist or replace with standard Buttons if needed */}
              <InfoMenu onItemClick={onInfoItemClick} />

              {/* Notification */}
              <NotificationMenu
                notificationCount={notificationCount}
                onItemClick={onNotificationItemClick}
              />
            </div>

            {/* User menu */}
            <UserMenu
              onItemClick={onUserItemClick}
              userAvatar={userAvatar}
              userEmail={userEmail}
              userName={userName}
            />
          </div>
        </div>
      </header>
    );
  },
);

Navbar05.displayName = "Navbar05";

export { Logo, HamburgerIcon, InfoMenu, NotificationMenu, UserMenu };

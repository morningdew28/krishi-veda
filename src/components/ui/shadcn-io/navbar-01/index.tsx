"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";

// Simple logo component for the navbar
const Logo = (props: React.SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 385.7644438724229 187.68117658998767"
      preserveAspectRatio="xMidYMid meet"
      height="1em"
    >
      <defs>
        <clipPath id="kv">
          <rect
            width={385.7644438724229}
            height={187.68117658998767}
            x={0}
            y={0}
          />
        </clipPath>
      </defs>
      <g clipPath="url(#kv)">
        <g
          transform="matrix(1.385195255279541,-0.45007723569869995,0.3662070631980896,1.1270694732666016,-67.42494201660156,-93.4547348022461)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <path
            fillRule="evenodd"
            fill="rgb(41,109,19)"
            fillOpacity={1}
            d=" M119.41365051269531,215.02850341796875 C119.41365051269531,215.02850341796875 124.88321685791016,198.12216186523438 116.73538970947266,185.900390625 C121.91526794433594,120.64945220947266 55.24932098388672,101.46780395507812 22.657943725585938,98.41236114501953 C52.70313262939453,121.83744812011719 30.80576515197754,196.18658447265625 97.00707244873047,198.7327880859375 C95.98860931396484,199.24203491210938 84.27603912353516,167.1598663330078 61.86946487426758,133.5499725341797 C92.42391204833984,155.4473419189453 112.68987274169922,220.60145568847656 111.27464294433594,231.41787719726562 C120.95018005371094,228.3624267578125 119.41365051269531,215.02850341796875 119.41365051269531,215.02850341796875z"
          />
        </g>
        <g
          transform="matrix(4.040576934814453,0,0,4.040576934814453,136.31600952148438,-34.550567626953125)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              fill="rgb(41,110,19)"
              fillOpacity={1}
              d=" M23.760000228881836,55 C23.760000228881836,55 10.449999809265137,38 10.449999809265137,38 C10.449999809265137,38 10.449999809265137,55 10.449999809265137,55 C10.449999809265137,55 2.75,55 2.75,55 C2.75,55 2.75,16.5 2.75,16.5 C2.75,16.5 10.449999809265137,16.5 10.449999809265137,16.5 C10.449999809265137,16.5 10.449999809265137,32.38999938964844 10.449999809265137,32.38999938964844 C10.449999809265137,32.38999938964844 22.440000534057617,16.5 22.440000534057617,16.5 C22.440000534057617,16.5 32.5099983215332,16.5 32.5099983215332,16.5 C32.5099983215332,16.5 17.600000381469727,34.540000915527344 17.600000381469727,34.540000915527344 C17.600000381469727,34.540000915527344 33.599998474121094,55 33.599998474121094,55 C33.599998474121094,55 23.760000228881836,55 23.760000228881836,55 C23.760000228881836,55 23.760000228881836,55 23.760000228881836,55z"
            />
          </g>
        </g>
        <g
          transform="matrix(4.040576934814453,0,0,4.040576934814453,235.98023986816406,-34.55055236816406)"
          opacity={1}
          style={{
            display: "block",
          }}
        >
          <g opacity={1} transform="matrix(1,0,0,1,0,0)">
            <path
              fill="rgb(199,171,74)"
              fillOpacity={1}
              d=" M14.40999984741211,55 C14.40999984741211,55 -0.9399999976158142,16.5 -0.9399999976158142,16.5 C-0.9399999976158142,16.5 7.96999979019165,16.5 7.96999979019165,16.5 C7.96999979019165,16.5 16.770000457763672,40.97999954223633 16.770000457763672,40.97999954223633 C17.399999618530273,42.77000045776367 17.860000610351562,44.380001068115234 18.149999618530273,45.810001373291016 C18.149999618530273,45.810001373291016 18.149999618530273,45.810001373291016 18.149999618530273,45.810001373291016 C18.440000534057617,44.310001373291016 18.899999618530273,42.70000076293945 19.520000457763672,40.97999954223633 C19.520000457763672,40.97999954223633 19.520000457763672,40.97999954223633 19.520000457763672,40.97999954223633 C19.520000457763672,40.97999954223633 28.31999969482422,16.5 28.31999969482422,16.5 C28.31999969482422,16.5 37.06999969482422,16.5 37.06999969482422,16.5 C37.06999969482422,16.5 21.84000015258789,55 21.84000015258789,55 C21.84000015258789,55 14.40999984741211,55 14.40999984741211,55 C14.40999984741211,55 14.40999984741211,55 14.40999984741211,55z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    aria-label="Menu"
    className={cn("pointer-events-none", className)}
    fill="none"
    height={16}
    role="img"
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

// Types
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "/",
      navigationLinks = defaultNavigationLinks,
      signInText = "Sign In",
      signInHref = "#signin",
      ctaText = "Get Started",
      ctaHref = "#get-started",
      onSignInClick,
      onCtaClick,
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
          {/* LEFT SECTION (Logo + Nav) */}
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
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem className="w-full" key={index}>
                          <NavigationMenuLink
                            asChild
                            className={cn(
                              "hover:bg-accent hover:text-accent-foreground flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors",
                              link.active
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80",
                            )}
                          >
                            <Link href={link.href}>{link.label}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            </div>

            {/* LOGO + DESKTOP MENU WRAPPER */}
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
                <NavigationMenu>
                  <NavigationMenuList className="gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink
                          asChild
                          className={cn(
                            "group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium no-underline transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                            link.active
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80 hover:text-foreground",
                          )}
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (Auth Buttons) */}
          <div className="flex items-center gap-3">
            <Button
              className="hover:bg-accent hover:text-accent-foreground text-sm font-medium"
              size="sm"
              variant="ghost"
              asChild
            >
              <Link href={signInHref}>{signInText}</Link>
            </Button>
            <Button
              className="h-9 rounded-md px-4 text-sm font-medium shadow-sm"
              size="sm"
              asChild
            >
              <Link href={ctaHref}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </header>
    );
  },
);

Navbar01.displayName = "Navbar01";

export { Logo, HamburgerIcon };

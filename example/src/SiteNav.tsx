import React from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { Site } from "tabler-react";

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    linkAs: ReactRouterNavLink,
    linkProps: { exact: true },
  },
  {
    value: "Interface",
    icon: "box",
    href: "#interface",
    subItemsObjects: [
      {
        value: "Cards Design",
        to: "/cards",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Charts",
        to: "/charts",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        linkAs: ReactRouterNavLink,
      },
    ],
  },
  {
    value: "Components",
    icon: "calendar",
    href: "#components",
    subItemsObjects: [
      {
        value: "Maps",
        to: "/maps",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Icons",
        to: "/icons",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Store",
        to: "/store",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Blog",
        to: "/blog",
        linkAs: ReactRouterNavLink,
      },
    ],
  },
  {
    value: "Pages",
    icon: "file",
    href: "#pages",
    subItemsObjects: [
      {
        value: "Profile",
        to: "/profile",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Login",
        to: "/login",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Register",
        to: "/register",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Forgot password",
        to: "/forgot-password",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "400 error",
        to: "/400",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "401 error",
        to: "/401",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "403 error",
        to: "/403",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "404 error",
        to: "/404",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "500 error",
        to: "/500",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "503 error",
        to: "/503",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Email",
        to: "/email",
        linkAs: ReactRouterNavLink,
      },
      {
        value: "Empty page",
        to: "/empty-page",
        linkAs: ReactRouterNavLink,
      },
      { value: "RTL", to: "/rtl", linkAs: ReactRouterNavLink },
    ],
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    linkAs: ReactRouterNavLink,
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    linkAs: ReactRouterNavLink,
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation",
  },
];

const SiteNav = function() {
  return (
    <Site.Nav
      logoURL="./demo/brand/tabler.svg"
      isSide={true}
      side="right"
      itemsObjects={navBarItems}
    />
  );
};

export default SiteNav;

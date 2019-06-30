import React, { useState } from "react";

import Page from "../Page";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

import { SiteHeaderProps } from "./SiteHeader";
import { SiteNavProps } from "./SiteNav";
import { SiteFooterProps } from "./SiteFooter";

export interface SiteWrapperProps {
  header?: React.ElementType;
  headerProps?: SiteHeaderProps;
  nav?: React.ElementType;
  navProps?: SiteNavProps;
  footer?: React.ElementType;
  footerProps?: SiteFooterProps;
  children: React.ReactNode;
}

const SiteWrapper = function({
  header: Header = SiteHeader,
  headerProps = {},
  nav: Nav = SiteNav,
  navProps = {},
  footer: Footer = SiteFooter,
  footerProps = {},
  children,
}: SiteWrapperProps) {
  const [collapseMobileMenu, setCollapseMobileMenu] = useState(false);

  const handleCollapseMobileMenu = (): void => {
    setCollapseMobileMenu(s => !s);
  };

  const nav = <Nav collapse={collapseMobileMenu} {...navProps} />;

  return (
    <Page>
      {navProps.isSide && nav}
      <Page.Main>
        <Header onMenuToggleClick={handleCollapseMobileMenu} {...headerProps} />
        {!navProps.isSide && nav}
        {children}
      </Page.Main>
      {/* <Footer {...footerProps} /> */}
    </Page>
  );
};

export default SiteWrapper;

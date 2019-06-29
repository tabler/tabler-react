import React, { useState } from "react";

import Page from "../Page";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

import { SiteHeaderProps } from "./SiteHeader";
import { SiteNavProps } from "./SiteNav";
import { SiteFooterProps } from "./SiteFooter";

interface SiteWrapperProps {
  headerProps: SiteHeaderProps;
  navProps: SiteNavProps;
  footerProps: SiteFooterProps;
  children: React.ReactNode;
  routerContextComponentType?: React.ElementType;
}

const SiteWrapper = function({
  headerProps,
  navProps,
  footerProps,
  children,
  routerContextComponentType,
}: SiteWrapperProps) {
  const [collapseMobileMenu, setCollapseMobileMenu] = useState(false);

  const handleCollapseMobileMenu = (): void => {
    setCollapseMobileMenu(s => !s);
  };

  const headerPropsWithToggleClick = {
    ...headerProps,
    onMenuToggleClick: handleCollapseMobileMenu,
  };
  const header = React.createElement(SiteHeader, headerPropsWithToggleClick);
  const navPropsWithCollapse = {
    ...navProps,
    collapse: collapseMobileMenu,
    routerContextComponentType: routerContextComponentType,
  };
  const nav = React.createElement(SiteNav, navPropsWithCollapse);
  const footer = React.createElement(SiteFooter, footerProps);

  return (
    <Page>
      {navProps.isSide && nav}
      <Page.Main>
        {header}
        {!navProps.isSide && nav}
        {children}
      </Page.Main>
      {/* {footer} */}
    </Page>
  );
};

export default SiteWrapper;

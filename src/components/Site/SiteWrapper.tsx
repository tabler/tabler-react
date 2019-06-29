import * as React from "react";

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

type State = {
  collapseMobileMenu: boolean;
};

class SiteWrapper extends React.PureComponent<SiteWrapperProps, State> {
  state = {
    collapseMobileMenu: false,
  };

  handleCollapseMobileMenu = (): void => {
    this.setState(s => ({ collapseMobileMenu: !s.collapseMobileMenu }));
  };

  render() {
    const {
      headerProps,
      navProps,
      footerProps,
      children,
      routerContextComponentType,
    }: SiteWrapperProps = this.props;

    const headerPropsWithToggleClick = {
      ...headerProps,
      onMenuToggleClick: this.handleCollapseMobileMenu,
    };
    const header = React.createElement(SiteHeader, headerPropsWithToggleClick);
    const navPropsWithCollapse = {
      ...navProps,
      collapse: this.state.collapseMobileMenu,
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
  }
}

export default SiteWrapper;

import * as React from "react";

import Page from "../Page";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";

import { Props as SiteHeaderProps } from "./SiteHeader";
import { Props as SiteNavProps } from "./SiteNav";
import { Props as SiteFooterProps } from "./SiteFooter";

type Props = {
  headerProps: SiteHeaderProps;
  navProps: SiteNavProps;
  footerProps: SiteFooterProps;
  children: React.ReactNode;
  routerContextComponentType?: React.ElementType;
};

type State = {
  collapseMobileMenu: boolean;
};

class SiteWrapper extends React.PureComponent<Props, State> {
  static displayName = "Site.Wrapper";

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
    }: Props = this.props;

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
        <Page.Main>
          {header}
          {nav}
          {children}
        </Page.Main>
        {footer}
      </Page>
    );
  }
}

export default SiteWrapper;

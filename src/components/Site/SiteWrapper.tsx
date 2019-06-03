import * as React from "react";

import { Page, Site } from "..";
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
    collapseMobileMenu: true,
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
    const header = React.createElement(Site.Header, headerPropsWithToggleClick);
    const navPropsWithCollapse = {
      ...navProps,
      collapse: this.state.collapseMobileMenu,
      routerContextComponentType: routerContextComponentType,
    };
    const nav = React.createElement(Site.Nav, navPropsWithCollapse);
    const footer = React.createElement(Site.Footer, footerProps);

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

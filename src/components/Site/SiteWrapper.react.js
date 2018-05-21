// @flow

import * as React from "react";

import { Page, Site } from "../";
import type { Props as SiteHeaderProps } from "./SiteHeader.react";
import type { Props as SiteNavProps } from "./SiteNav.react";
import type { Props as SiteFooterProps } from "./SiteFooter.react";

type Props = {|
  +headerProps: SiteHeaderProps,
  +navProps: SiteNavProps,
  +footerProps: SiteFooterProps,
  +children: React.Node,
|};

function SiteWrapper(props: Props): React.Node {
  const { headerProps, navProps, footerProps, children } = props;

  const header = React.createElement(Site.Header, headerProps);
  const nav = React.createElement(Site.Nav, navProps);
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

SiteWrapper.displayName = "Site.Wrapper";

export default SiteWrapper;

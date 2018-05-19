// @flow

import * as React from "react";

import { Page, Site } from "../";
import type { Props as SiteHeaderProps } from "./SiteHeader.react";
import type { Props as SiteNavProps } from "./SiteNav.react";

type Props = {|
  +headerProps: SiteHeaderProps,
  +navProps: SiteNavProps,
  +children: React.Node,
|};

function SiteWrapper(props: Props): React.Node {
  const { headerProps, navProps, children } = props;

  const header = React.createElement(Site.Header, headerProps);
  const nav = React.createElement(Site.Nav, navProps);

  return (
    <Page>
      <Page.Main>
        {header}
        {nav}
        {children}
      </Page.Main>
      <Site.Footer />
    </Page>
  );
}

SiteWrapper.displayName = "Site.Wrapper";

export default SiteWrapper;

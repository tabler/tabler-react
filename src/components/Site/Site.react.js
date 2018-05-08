// @flow

import * as React from "react";
import SiteHeader from "./SiteHeader.react";
import SiteFooter from "./SiteFooter.react";
import SiteNav from "./SiteNav.react";
import SiteLogo from "./SiteLogo.react";

type Props = {|
  +children: React.Node,
|};

function Site(props: Props): React.Node {
  return props.children;
}

Site.Header = SiteHeader;
Site.Footer = SiteFooter;
Site.Nav = SiteNav;
Site.Logo = SiteLogo;

Site.displayName = "Site";

/** @component */
export default Site;

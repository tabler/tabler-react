// @flow

import * as React from "react";
import SiteHeader from "./SiteHeader.react";
import SiteFooter from "./SiteFooter.react";
import SiteNav from "./SiteNav.react";
import SiteLogo from "./SiteLogo.react";
import SiteWrapper from "./SiteWrapper.react";

type Props = {|
  +children: React.Node,
|};

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props: Props): React.Node {
  return props.children;
}

Site.Header = SiteHeader;
Site.Footer = SiteFooter;
Site.Nav = SiteNav;
Site.Logo = SiteLogo;
Site.Wrapper = SiteWrapper;

Site.displayName = "Site";

/** @component */
export default Site;

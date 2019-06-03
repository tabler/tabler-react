import * as React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import SiteLogo from "./SiteLogo";
import SiteWrapper from "./SiteWrapper";

type Props = {
  children: React.ReactNode;
};

/**
 * Components for building the base of your website, such as a header, footer and nav bar
 */
function Site(props: Props) {
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

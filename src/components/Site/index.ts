import Site from "./Site";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import SiteLogo from "./SiteLogo";
import SiteWrapper from "./SiteWrapper";

// @ts-ignore
Site.Header = SiteHeader;
// @ts-ignore
Site.Footer = SiteFooter;
// @ts-ignore
Site.Nav = SiteNav;
// @ts-ignore
Site.Logo = SiteLogo;
// @ts-ignore
Site.Wrapper = SiteWrapper;

export {
  Site as default,
  Site,
  SiteHeader,
  SiteFooter,
  SiteNav,
  SiteLogo,
  SiteWrapper,
};

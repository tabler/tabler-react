import Site from "./Site";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import SiteLogo from "./SiteLogo";
import SiteWrapper from "./SiteWrapper";

const CompoundSite = Site as typeof Site & {
  Header: typeof SiteHeader;
  Footer: typeof SiteFooter;
  Nav: typeof SiteNav;
  Logo: typeof SiteLogo;
  Wrapper: typeof SiteWrapper;
};

CompoundSite.Header = SiteHeader;
CompoundSite.Footer = SiteFooter;
CompoundSite.Nav = SiteNav;
CompoundSite.Logo = SiteLogo;
CompoundSite.Wrapper = SiteWrapper;

export {
  CompoundSite as default,
  Site,
  SiteHeader,
  SiteFooter,
  SiteNav,
  SiteLogo,
  SiteWrapper,
};

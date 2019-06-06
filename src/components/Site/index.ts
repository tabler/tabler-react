import Site from "./Site";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteNav from "./SiteNav";
import SiteLogo from "./SiteLogo";
import SiteWrapper from "./SiteWrapper";

const CompoundSite = Object.assign(Site, {
  Header: SiteHeader,
  Footer: SiteFooter,
  Nav: SiteNav,
  Logo: SiteLogo,
  Wrapper: SiteWrapper,
});

export {
  CompoundSite as default,
  Site,
  SiteHeader,
  SiteFooter,
  SiteNav,
  SiteLogo,
  SiteWrapper,
};

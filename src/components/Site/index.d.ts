import SiteHeader from "./SiteHeader";
import SiteNavbar from "./SiteNavbar";
import SiteLogo from "./SiteLogo";
import SiteFooter from "./SiteFooter";

declare namespace Site {
  interface NestedComponents {
    Header: SiteHeader.Component,
    HeaderProps: SiteHeader.Props,
    Navbar: SiteNavbar.Component,
    NavbarProps: SiteNavbar.Props,
    Logo: SiteLogo.Component,
    LogoProps: SiteLogo.Props,
    Footer: SiteFooter.Component,
    FooterProps: SiteFooter.Props,
  }
}

declare const Site: Site.NestedComponents;
export = Site;

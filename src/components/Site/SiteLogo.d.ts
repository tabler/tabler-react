import * as React from 'react';

declare namespace SiteLogo {
    export interface SiteLogoProps extends React.Props<SiteLogo> {
      href: string;
      src: string;
      alt: string;
    }
}
declare class SiteLogo extends React.Component<SiteLogo.SiteLogoProps> { }
export = SiteLogo;

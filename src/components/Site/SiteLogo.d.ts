import * as React from 'react';

declare namespace SiteLogo {
    export interface ISiteLogoProps<T> extends React.HTMLProps<T> {
      href: string;
      src: string;
      alt: string;
    }
    export type SiteLogoProps = ISiteLogoProps<HTMLDivElement>;
}
declare class SiteLogo extends React.Component<SiteLogo.SiteLogoProps> { }
export = SiteLogo;

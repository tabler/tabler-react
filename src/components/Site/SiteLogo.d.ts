import * as React from 'react';

declare namespace SiteLogo {
    interface ISiteLogoProps<T> extends React.HTMLProps<T> {
      href: string;
      src: string;
      alt: string;
    }
    type Props = ISiteLogoProps<HTMLAnchorElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const SiteLogo: SiteLogo.Component;
export = SiteLogo;

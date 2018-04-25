import * as React from 'react';

declare namespace SiteFooter {
    interface ISiteFooterProps<T> extends React.HTMLProps<T> {
    }
    type Props = ISiteFooterProps<HTMLElement>; // TODO: not sure if `React.Fragment`
    type Component = React.StatelessComponent<Props>;
}
declare const SiteFooter: SiteFooter.Component;
export = SiteFooter;

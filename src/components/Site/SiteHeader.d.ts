import * as React from 'react';

declare namespace SiteHeader {
    interface ISiteHeaderProps<T> extends React.HTMLProps<T> {
    }
    type Props = ISiteHeaderProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const SiteHeader: SiteHeader.Component;
export = SiteHeader;

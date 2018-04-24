import * as React from 'react';

declare namespace SiteFooter {
    export interface ISiteFooterProps<T> extends React.HTMLProps<T> {
    }
    export type SiteFooterProps = ISiteFooterProps<HTMLDivElement>;
}
declare class SiteFooter extends React.Component<SiteFooter.SiteFooterProps> { }
export = SiteFooter;

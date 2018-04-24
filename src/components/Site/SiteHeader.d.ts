import * as React from 'react';

declare namespace SiteHeader {
    export interface ISiteHeaderProps<T> extends React.HTMLProps<T> {
    }
    export type SiteHeaderProps = ISiteHeaderProps<HTMLDivElement>;
}
declare class SiteHeader extends React.Component<SiteHeader.SiteHeaderProps> { }
export = SiteHeader;

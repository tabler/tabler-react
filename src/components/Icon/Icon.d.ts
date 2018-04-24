import * as React from 'react';

declare namespace Icon {
    export interface IIconProps<T> extends React.HTMLProps<T> {
      className?: string;
      link?: boolean;
      prefix?: "fa" | "fe";
      name: string;
      isAriaHidden?: boolean;
    }
    export type IconProps = IIconProps<HTMLDivElement>;
}
declare class Icon extends React.Component<Icon.IconProps> { }
export = Icon;

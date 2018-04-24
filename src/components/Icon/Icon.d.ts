import * as React from 'react';

declare namespace Icon {
    export interface IconProps extends React.Props<Icon> {
      className?: string;
      link?: boolean;
      prefix?: "fa" | "fe";
      name: string;
      isAriaHidden?: boolean;
    }
}
declare class Icon extends React.Component<Icon.IconProps> { }
export = Icon;

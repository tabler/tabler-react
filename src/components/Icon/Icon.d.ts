import * as React from 'react';

declare namespace Icon {
    interface IIconProps<T> extends React.HTMLProps<T> {
      link?: boolean;
      prefix?: "fa" | "fe";
      name: string;
      isAriaHidden?: boolean;
    }
    type Props = IIconProps<HTMLElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const Icon: Icon.Component;
export = Icon;

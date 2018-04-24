import * as React from 'react';

declare namespace Button {
    export interface ButtonProps extends React.Props<Button> {
      className?: string;
      size?: "sm" | "lg";
      outline?: boolean;
      link?: boolean;
      block?: boolean;
      children?: React.ReactNode;
      disabled?: boolean;
      color?: string;
      square?: boolean;
      pill?: boolean;
      icon?: string;
      social?: string;
      loading?: boolean;
      RootComponent?: React.ReactElement<any>;
      href?: string;
      target?: string;
      isDropdownToggle?: boolean;
      onClick?: (ev: React.SyntheticEvent<HTMLLinkElement>) => any;
    }
}
declare class Button extends React.Component<Button.ButtonProps> { }
export = Button;

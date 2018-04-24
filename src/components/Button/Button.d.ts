import * as React from 'react';
import { Omit } from '../../index';

declare namespace Button {
    export interface IButtonProps<T> extends Omit<React.HTMLProps<T>, 'size' | 'onClick'> {
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
    export type ButtonProps = IButtonProps<HTMLDivElement>;
}
declare class Button extends React.Component<Button.ButtonProps> { }
export = Button;

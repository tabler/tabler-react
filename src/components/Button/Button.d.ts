import * as React from 'react';
import { Omit } from '../../index';
import ButtonList from './ButtonList';

declare namespace Button {
    interface IButtonProps<T> extends Omit<React.HTMLProps<T>, 'size' | 'onClick'> {
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
      RootComponent?: React.ReactType;
      href?: string;
      target?: string;
      isDropdownToggle?: boolean;
      onClick?: (ev: React.SyntheticEvent<HTMLLinkElement>) => any;
    }
    type Props = IButtonProps<HTMLElement>; // TODO: not sure if `HTMLButtonElement`
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {1
      List: ButtonList.Component;
    }
}
declare const Button: Button.Component & Button.NestedComponents;
export = Button;

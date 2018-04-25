import * as React from 'react';
import { Omit } from '../../index';
import AvatarList from './AvatarList';

declare namespace Avatar {
    interface IAvatarProps<T> extends Omit<React.HTMLProps<T>, 'placeholder' | 'size'> {
      imageURL?: string;
      style?: Object;
      size?: "sm" | "md" | "lg" | "xl" | "xxl";
      status?: "grey" | "red" | "yellow" | "green";
      placeholder?: boolean;
      icon?: string;
      color?: string;
    }
    type Props = IAvatarProps<HTMLSpanElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      List: AvatarList.Component;
      ListProps: AvatarList.Props;
    }
}
declare const Avatar: Avatar.Component & Avatar.NestedComponents;
export = Avatar;

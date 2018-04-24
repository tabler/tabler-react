import * as React from 'react';
import { Omit } from '../../index';

declare namespace Avatar {
    export interface IAvatarProps<T> extends Omit<React.HTMLProps<T>, 'placeholder' | 'size'> {
      className?: string;
      imageURL?: string;
      style?: Object;
      size?: "sm" | "md" | "lg" | "xl" | "xxl";
      status?: "grey" | "red" | "yellow" | "green";
      placeholder?: boolean;
      icon?: string;
      color?: string;
    }
    export type AvatarProps = IAvatarProps<HTMLDivElement>;
}
declare class Avatar extends React.Component<Avatar.AvatarProps> { }
export = Avatar;

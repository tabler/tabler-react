import * as React from 'react';


declare namespace Avatar {
    export interface AvatarProps extends React.Props<Avatar> {
      className?: string;
      imageURL?: string;
      style?: Object;
      size?: "sm" | "md" | "lg" | "xl" | "xxl";
      status?: "grey" | "red" | "yellow" | "green";
      placeholder?: boolean;
      icon?: string;
      color?: string;
    }
}
declare class Avatar extends React.Component<Avatar.AvatarProps> { }
export = Avatar;

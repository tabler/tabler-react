import * as React from 'react';

declare namespace ButtonList {
    export interface IButtonListProps<T> extends React.HTMLProps<T> {
      className?: string;
      align?: "" | "left" | "center" | "right";
    }
    export type ButtonListProps = IButtonListProps<HTMLDivElement>;
}
declare class ButtonList extends React.Component<ButtonList.ButtonListProps> { }
export = ButtonList;

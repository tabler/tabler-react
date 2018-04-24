import * as React from 'react';

declare namespace ButtonList {
    export interface ButtonListProps extends React.Props<ButtonList> {
      className?: string;
      align?: "" | "left" | "center" | "right";
    }
}
declare class ButtonList extends React.Component<ButtonList.ButtonListProps> { }
export = ButtonList;

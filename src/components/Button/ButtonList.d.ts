import * as React from 'react';

declare namespace ButtonList {
    interface IButtonListProps<T> extends React.HTMLProps<T> {
      align?: "" | "left" | "center" | "right";
    }
    type Props = IButtonListProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const ButtonList: ButtonList.Component;
export = ButtonList;

import * as React from 'react';


declare namespace AvatarList {
    interface IAvatarListProps<T> extends React.HTMLProps<T> {
      stacked?: boolean;
    }
    type Props = IAvatarListProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const AvatarList: AvatarList.Component;
export = AvatarList;

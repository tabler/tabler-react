import * as React from 'react';


declare namespace AvatarList {
    export interface IAvatarListProps<T> extends React.HTMLProps<T> {
      className?: string;
      stacked?: boolean;
    }
    export type AvatarListProps = IAvatarListProps<HTMLDivElement>;
}
declare class AvatarList extends React.Component<AvatarList.AvatarListProps> { }
export = AvatarList;

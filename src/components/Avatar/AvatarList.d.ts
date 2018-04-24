import * as React from 'react';


declare namespace AvatarList {
    export interface AvatarListProps extends React.Props<AvatarList> {
      className?: string;
      stacked?: boolean;
    }
}
declare class AvatarList extends React.Component<AvatarList.AvatarListProps> { }
export = AvatarList;

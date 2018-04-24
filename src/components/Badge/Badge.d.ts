import * as React from 'react';

declare namespace Badge {
    export interface BadgeProps extends React.Props<Badge> {
      className?: string;
    }
}
declare class Badge extends React.Component<Badge.BadgeProps> { }
export = Badge;

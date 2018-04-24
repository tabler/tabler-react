import * as React from 'react';

declare namespace Badge {
    export interface IBadgeProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type BadgeProps = IBadgeProps<HTMLDivElement>;
}
declare class Badge extends React.Component<Badge.BadgeProps> { }
export = Badge;

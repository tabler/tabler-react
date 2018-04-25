import * as React from 'react';

declare namespace Badge {
    interface IBadgeProps<T> extends React.HTMLProps<T> {
    }
    type Props = IBadgeProps<HTMLSpanElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const Badge: Badge.Component;
export = Badge;

import * as React from 'react';

declare namespace FormColorCheckItem {
    interface IFormColorCheckItemProps<T> extends React.HTMLProps<T> {
      color: string;
    }
    type Props = IFormColorCheckItemProps<HTMLElement>; // TODO: not sure if `Grid.Col`
    type Component = React.StatelessComponent<Props>;
}
declare const FormColorCheckItem: FormColorCheckItem.Component;
export = FormColorCheckItem;

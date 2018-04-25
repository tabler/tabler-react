import * as React from 'react';

declare namespace FormImageCheckItem {
    interface IFormImageCheckItemProps<T> extends React.HTMLProps<T> {
      value: string | number,
      imageURL: string,
      col?: {
        width?: number,
        sm?: number,
        md?: number,
        lg?: number,
      },
    }
    type Props = IFormImageCheckItemProps<HTMLElement>; // TODO: not sure if `Grid.Row`
    type Component = React.StatelessComponent<Props>;
}
declare const FormImageCheckItem: FormImageCheckItem.Component;
export = FormImageCheckItem;

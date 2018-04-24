import * as React from 'react';

declare namespace FormImageCheckItem {
    export interface IFormImageCheckItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      value: string | number,
      imageURL: string,
      col?: {
        width?: number,
        sm?: number,
        md?: number,
        lg?: number,
      },
    }
    export type FormImageCheckItemProps = IFormImageCheckItemProps<HTMLDivElement>;
}
declare class FormImageCheckItem extends React.Component<FormImageCheckItem.FormImageCheckItemProps> { }
export = FormImageCheckItem;

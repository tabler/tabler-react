import * as React from 'react';

declare namespace FormColorCheckItem {
    export interface IFormColorCheckItemProps<T> extends React.HTMLProps<T> {
      className?: string;
      color: string;
    }
    export type FormColorCheckItemProps = IFormColorCheckItemProps<HTMLDivElement>;
}
declare class FormColorCheckItem extends React.Component<FormColorCheckItem.FormColorCheckItemProps> { }
export = FormColorCheckItem;

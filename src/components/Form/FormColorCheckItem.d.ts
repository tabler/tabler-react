import * as React from 'react';

declare namespace FormColorCheckItem {
    export interface FormColorCheckItemProps extends React.Props<FormColorCheckItem> {
      className?: string;
      color: string;
    }
}
declare class FormColorCheckItem extends React.Component<FormColorCheckItem.FormColorCheckItemProps> { }
export = FormColorCheckItem;

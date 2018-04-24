import * as React from 'react';

declare namespace FormImageCheckItem {
    export interface FormImageCheckItemProps extends React.Props<FormImageCheckItem> {
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
}
declare class FormImageCheckItem extends React.Component<FormImageCheckItem.FormImageCheckItemProps> { }
export = FormImageCheckItem;

import * as React from 'react';

declare namespace FormCard {
    export interface IFormCardProps<T> extends React.HTMLProps<T> {
      className?: string;
      method: string;
      title: string;
      buttonText: string;
    }
    export type FormCardProps = IFormCardProps<HTMLDivElement>;
}
declare class FormCard extends React.Component<FormCard.FormCardProps> { }
export = FormCard;

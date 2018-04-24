import * as React from 'react';

declare namespace FormCard {
    export interface FormCardProps extends React.Props<FormCard> {
      className?: string;
      method: string;
      title: string;
      buttonText: string;
    }
}
declare class FormCard extends React.Component<FormCard.FormCardProps> { }
export = FormCard;

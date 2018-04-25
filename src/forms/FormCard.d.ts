import * as React from 'react';

declare namespace FormCard {
    interface IFormCardProps<T> extends React.HTMLProps<T> {
      action: string,
      method: string;
      title: string;
      buttonText: string;
    }
    type Props = IFormCardProps<HTMLElement>; // TODO: not sure if `Form`
    type Component = React.StatelessComponent<Props>;
}
declare const FormCard: FormCard.Component;
export = FormCard;

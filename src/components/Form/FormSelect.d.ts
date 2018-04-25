import * as React from 'react';

declare namespace FormSelect {
    interface IFormSelectProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormSelectProps<HTMLSelectElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const FormSelect: FormSelect.Component;
export = FormSelect;

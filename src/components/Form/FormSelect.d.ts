import * as React from 'react';

declare namespace FormSelect {
    export interface FormSelectProps extends React.Props<FormSelect> {
      className?: string;
    }
}
declare class FormSelect extends React.Component<FormSelect.FormSelectProps> { }
export = FormSelect;

import * as React from 'react';

declare namespace FormStaticText {
    export interface IFormStaticTextProps<T> extends React.HTMLProps<T> {
      className?: string;
    }
    export type FormStaticTextProps = IFormStaticTextProps<HTMLDivElement>;
}
declare class FormStaticText extends React.Component<FormStaticText.FormStaticTextProps> { }
export = FormStaticText;

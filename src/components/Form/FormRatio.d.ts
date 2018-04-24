import * as React from 'react';
import { Omit } from '../../index';

declare namespace FormRatio {
    export interface IFormRatioProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'onChange' | 'defaultValue'> {
      className?: string;
      step?: number;
      min?: number;
      max?: number;
      value: number;
      onChange: (event: React.SyntheticEvent<EventTarget>) => any;
      defaultValue: number
    }
    export type FormRatioProps = IFormRatioProps<HTMLDivElement>;
    export interface IFormRatioState {
      internalValue: number;
    }
    export type FormRatioState = IFormRatioState;
}
declare class FormRatio extends React.Component<FormRatio.FormRatioProps, FormRatio.FormRatioState> { }
export = FormRatio;

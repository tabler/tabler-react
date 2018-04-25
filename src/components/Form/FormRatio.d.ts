import * as React from 'react';
import { Omit } from '../../index';

declare namespace FormRatio {
    interface IFormRatioProps<T> extends Omit<React.HTMLProps<T>, 'value' | 'onChange' | 'defaultValue'> {
      step?: number;
      min?: number;
      max?: number;
      value: number;
      onChange: (event: React.SyntheticEvent<EventTarget>) => any;
      defaultValue: number
    }
    type Props = IFormRatioProps<HTMLElement>; // TODO: not sure if `Grid.Row`
    interface IFormRatioState {
      internalValue: number;
    }
    type State = IFormRatioState;
    type Component = React.Component<Props, State>;
}
declare const FormRatio: FormRatio.Component; // TODO: Should this be a class?
export = FormRatio;

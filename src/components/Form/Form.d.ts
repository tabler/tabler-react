import * as React from 'react';

import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormStaticText from './FormStaticText';
import FormTextarea from './FormTextarea';
import FormImageCheck from './FormImageCheck';
import FormImageCheckItem from './FormImageCheckItem';
import FormColorCheck from './FormColorCheck';
import FormColorCheckItem from './FormColorCheckItem';
import FormInputGroup from './FormInputGroup';
import FormHelp from './FormHelp';
import FormSelect from './FormSelect';
import FormFooter from './FormFooter';
import FormRatio from './FormRatio';

declare namespace Form {
    interface IFormProps<T> extends React.HTMLProps<T> {
    }
    type Props = IFormProps<HTMLFormElement>;
    type Component = React.StatelessComponent<Props>;
    interface NestedComponents {
      Group: FormGroup.Component;
      GroupProps: FormGroup.Props;
      Label: FormLabel.Component;
      LabelProps: FormLabel.Props;
      Input: FormInput.Component;
      InputProps: FormInput.Props;
      StaticText: FormStaticText.Component;
      StaticTextProps: FormStaticText.Props;
      Textarea: FormTextarea.Component;
      TextareaProps: FormTextarea.Props;
      ImageCheck: FormImageCheck.Component;
      ImageCheckProps: FormImageCheck.Props;
      ImageCheckItem: FormImageCheckItem.Component;
      ImageCheckItemProps: FormImageCheckItem.Props;
      ColorCheck: FormColorCheck.Component;
      ColorCheckProps: FormColorCheck.Props;
      ColorCheckItem: FormColorCheckItem.Component;
      ColorCheckItemProps: FormColorCheckItem.Props;
      InputGroup: FormInputGroup.Component;
      InputGroupProps: FormInputGroup.Props;
      Help: FormHelp.Component;
      HelpProps: FormHelp.Props;
      Select: FormSelect.Component;
      SelectProps: FormSelect.Props;
      Footer: FormFooter.Component;
      FooterProps: FormFooter.Props;
      Ratio: FormRatio.Component;
      RatioProps: FormRatio.Props;
    }
}
declare const Form: Form.Component & Form.NestedComponents;
export = Form;

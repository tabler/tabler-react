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
      Label: FormLabel.Component;
      Input: FormInput.Component;
      StaticText: FormStaticText.Component;
      Textarea: FormTextarea.Component;
      ImageCheck: FormImageCheck.Component;
      ImageCheckItem: FormImageCheckItem.Component;
      ColorCheck: FormColorCheck.Component;
      ColorCheckItem: FormColorCheckItem.Component;
      InputGroup: FormInputGroup.Component;
      Help: FormHelp.Component;
      Select: FormSelect.Component;
      Footer: FormFooter.Component;
      Ratio: FormRatio.Component;
    }
}
declare const Form: Form.Component & Form.NestedComponents;
export = Form;

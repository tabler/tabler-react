import * as React from "react";

import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormStaticText from "./FormStaticText";
import FormTextarea from "./FormTextarea";
import FormImageCheck from "./FormImageCheck";
import FormImageCheckItem from "./FormImageCheckItem";
import FormColorCheck from "./FormColorCheck";
import FormColorCheckItem from "./FormColorCheckItem";
import FormInputGroup from "./FormInputGroup";
import FormHelp from "./FormHelp";
import FormSelect from "./FormSelect";
import FormFooter from "./FormFooter";
import FormRatio from "./FormRatio";
import FormFieldSet from "./FormFieldSet";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import FormSelectGroup from "./FormSelectGroup";
import FormSelectGroupItem from "./FormSelectGroupItem";
import FormFileInput from "./FormFileInput";
import FormSwitchStack from "./FormSwitchStack";
import FormSwitch from "./FormSwitch";
import FormInputGroupAppend from "./FormInputGroupAppend";
import FormInputGroupPrepend from "./FormInputGroupPrepend";
import FormInputGroupText from "./FormInputGroupText";
import FormMaskedInput from "./FormMaskedInput";
import FormDatePicker from "./FormDatePicker";

import { FormEvents } from "../../";

export interface Props extends FormEvents {
  children?: React.ReactNode;
  className?: string;
  action?: string;
  method?: string;
  autoComplete: "on" | "off";
}

function Form({
  className,
  children,
  action,
  method,
  onSubmit,
  autoComplete,
}: Props) {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      action={action}
      method={method}
      autoComplete={autoComplete}
    >
      {children}
    </form>
  );
}

Form.defaultProps = {
  autoComplete: "off",
};

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Input = FormInput;
Form.StaticText = FormStaticText;
Form.Textarea = FormTextarea;
Form.ImageCheck = FormImageCheck;
Form.ImageCheckItem = FormImageCheckItem;
Form.ColorCheck = FormColorCheck;
Form.ColorCheckItem = FormColorCheckItem;
Form.InputGroup = FormInputGroup;
Form.Help = FormHelp;
Form.Select = FormSelect;
Form.Footer = FormFooter;
Form.Ratio = FormRatio;
Form.FieldSet = FormFieldSet;
Form.SelectGroup = FormSelectGroup;
Form.SelectGroupItem = FormSelectGroupItem;
Form.Radio = FormRadio;
Form.Checkbox = FormCheckbox;
Form.FileInput = FormFileInput;
Form.SwitchStack = FormSwitchStack;
Form.Switch = FormSwitch;
Form.InputGroupAppend = FormInputGroupAppend;
Form.InputGroupPrepend = FormInputGroupPrepend;
Form.InputGroupText = FormInputGroupText;
Form.MaskedInput = FormMaskedInput;
Form.DatePicker = FormDatePicker;

export default Form;

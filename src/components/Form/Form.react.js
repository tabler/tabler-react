// @flow
import * as React from "react";
import cn from "classnames";

import FormGroup from "./FormGroup.react";
import FormLabel from "./FormLabel.react";
import FormInput from "./FormInput.react";
import FormStaticText from "./FormStaticText.react";
import FormTextarea from "./FormTextarea.react";
import FormImageCheck from "./FormImageCheck.react";
import FormImageCheckItem from "./FormImageCheckItem.react";
import FormColorCheck from "./FormColorCheck.react";
import FormColorCheckItem from "./FormColorCheckItem.react";
import FormInputGroup from "./FormInputGroup.react";
import FormHelp from "./FormHelp.react";
import FormSelect from "./FormSelect.react";
import FormFooter from "./FormFooter.react";
import FormRatio from "./FormRatio.react";
import FormFieldSet from "./FormFieldSet.react";
import FormRadio from "./FormRadio.react";
import FormCheckbox from "./FormCheckbox.react";
import FormSelectGroup from "./FormSelectGroup.react";
import FormSelectGroupItem from "./FormSelectGroupItem.react";
import FormFileInput from "./FormFileInput.react";
import FormSwitchStack from "./FormSwitchStack.react";
import FormSwitch from "./FormSwitch.react";
import FormInputGroupAppend from "./FormInputGroupAppend.react";
import FormInputGroupPrepend from "./FormInputGroupPrepend.react";
import FormMaskedInput from "./FormMaskedInput.react";
import FormDatePicker from "./FormDatePicker.react";

import type { FormEvents } from "../../";

export type Props = {|
  ...FormEvents,
  +children?: React.Node,
  +className?: string,
  +action?: string,
  +method?: string,
|};

function Form({
  className,
  children,
  action,
  method,
  onSubmit,
}: Props): React.Node {
  const classes = cn(className);
  return (
    <form
      className={classes}
      onSubmit={onSubmit}
      action={action}
      method={method}
    >
      {children}
    </form>
  );
}

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
Form.MaskedInput = FormMaskedInput;
Form.DatePicker = FormDatePicker;

export default Form;

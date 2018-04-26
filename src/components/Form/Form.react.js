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

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function Form({ className, children }: Props): React.Node {
  const classes = cn(className);
  return <form className={classes}>{children}</form>;
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

export default Form;

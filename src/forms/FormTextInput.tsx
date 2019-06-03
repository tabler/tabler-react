import * as React from "react";

import Form from "../components/Form";

import { Props as FormInputProps } from "../components/Form/FormInput";

interface Props extends FormInputProps {
  label?: string;
}

function FormTextInput(props: Props) {
  const { label, ...propsForInput } = props;

  const formInputComponent = React.createElement(Form.Input, propsForInput);

  return <Form.Group label={label}>{formInputComponent}</Form.Group>;
}

export default FormTextInput;

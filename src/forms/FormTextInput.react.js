// @flow

import * as React from "react";

import Form from "../components/Form";

import type { Props as FormInputProps } from "../components/Form/FormInput.react";

type Props = {|
  ...FormInputProps,
  +label?: string,
|};

function FormTextInput(props: Props): React.Node {
  const { label, ...propsForInput } = props;

  const formInputComponent = React.createElement(Form.Input, propsForInput);

  return <Form.Group label={label}>{formInputComponent}</Form.Group>;
}

export default FormTextInput;

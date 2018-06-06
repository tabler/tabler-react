// @flow

import * as React from "react";
import Form from "../components/Form/Form.react";
import Button from "../components/Button/Button.react";
import type { Props as FormProps } from "../components/Form/Form.react";
import type { Props as FormInputProps } from "../components/Form/FormInput.react";
import type { Props as ButtonProps } from "../components/Button/Button.react";

type Props = {|
  formProps?: FormProps,
  inputProps?: FormInputProps,
  buttonProps?: ButtonProps,
|};

/**
 * A form containing a single input field with an appended Button
 */
function FormWithSingleInputAndButton({
  formProps,
  inputProps,
  buttonProps,
}: Props): React.Node {
  const button = React.createElement(Button, buttonProps);
  return (
    <Form {...formProps}>
      <Form.InputGroup inputProps={inputProps} append={button} />
    </Form>
  );
}

export default FormWithSingleInputAndButton;

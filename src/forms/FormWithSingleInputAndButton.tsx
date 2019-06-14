import * as React from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import { FormProps } from "../components/Form/Form";
import { FormInputProps } from "../components/Form/FormInput";
import { Props as ButtonProps } from "../components/Button/Button";

interface Props {
  formProps?: FormProps;
  inputProps?: FormInputProps;
  buttonProps?: ButtonProps;
}

/**
 * A form containing a single input field with an appended Button
 */
function FormWithSingleInputAndButton({
  formProps,
  inputProps,
  buttonProps,
}: Props) {
  const button = React.createElement(Button, buttonProps);
  return (
    <Form {...formProps}>
      <Form.InputGroup inputProps={inputProps} append={button} />
    </Form>
  );
}

export default FormWithSingleInputAndButton;

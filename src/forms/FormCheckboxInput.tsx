import * as React from "react";

import Form from "../components/Form";
import { Props as FormCheckboxProps } from "../components/Form/FormCheckbox";

function FormCheckboxInput(props: FormCheckboxProps) {
  const formCheckboxComponent = React.createElement(Form.Checkbox, props);

  return <Form.Group>{formCheckboxComponent}</Form.Group>;
}

export default FormCheckboxInput;

import React from "react";
import { TablerComponentProps } from "../../helpers/createTablerElement";

import El from "../El/El";

export interface FormProps extends TablerComponentProps<"form"> {}

function Form({ children, as, ...rest }: FormProps) {
  const Component = as || El.Form;
  return <Component {...rest}>{children}</Component>;
}

export default Form;

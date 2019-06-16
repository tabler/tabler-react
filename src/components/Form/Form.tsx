import React from "react";

import { TablerComponent, HTMLElementProps } from "../../types";
import El from "../El/El";

export interface FormProps
  extends TablerComponent,
    Omit<HTMLElementProps<HTMLFormElement>, "as"> {
  as?: React.ElementType;
}

function Form({ children, as: Component = El.Form, ...rest }: FormProps) {
  return <Component {...rest}>{children}</Component>;
}

export default Form;

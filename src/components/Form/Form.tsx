import React, { HTMLAttributes, FormHTMLAttributes } from "react";

import { FormEvents } from "../../";
import { TablerComponent } from "../../types";
import El from "../El/El";

export interface FormProps
  extends TablerComponent,
    FormHTMLAttributes<HTMLFormElement> {
  as?: React.ElementType;
}

function Form({ children, as: Component = El.Form, ...rest }: FormProps) {
  return <Component {...rest}>{children}</Component>;
}

export default Form;

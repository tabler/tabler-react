import React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";

export interface FormToggleStackProps extends ELProps<HTMLDivElement> {}

function FormToggleStack({ children, ...rest }: FormToggleStackProps) {
  return (
    <El.Div classNames="custom-switches-stacked" {...rest}>
      {children}
    </El.Div>
  );
}

export default FormToggleStack;

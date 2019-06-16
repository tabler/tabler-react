import React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface FormToggleStackProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function FormToggleStack({ children, ...rest }: FormToggleStackProps) {
  return (
    <El.Div classNames="custom-switches-stacked" {...rest}>
      {children}
    </El.Div>
  );
}

export default FormToggleStack;

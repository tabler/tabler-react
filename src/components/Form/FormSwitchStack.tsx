import React from "react";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface FormToggleStackProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function FormToggleStack({ children, ...rest }: FormToggleStackProps) {
  return (
    <El.Div classNames="custom-switches-stacked" {...rest}>
      {children}
    </El.Div>
  );
}

export default FormToggleStack;

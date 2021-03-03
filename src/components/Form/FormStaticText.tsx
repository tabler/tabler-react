import React from "react";

import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

interface FormStaticTextProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function FormStaticText({ children, ...rest }: FormStaticTextProps) {
  return (
    <El.Div classNames="form-control-plaintext" {...rest}>
      {children}
    </El.Div>
  );
}

export default FormStaticText;

import React from "react";

import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

interface FormStaticTextProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

function FormStaticText({ children, ...rest }: FormStaticTextProps) {
  return (
    <El.Div classNames="form-control-plaintext" {...rest}>
      {children}
    </El.Div>
  );
}

export default FormStaticText;

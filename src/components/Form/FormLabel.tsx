import React, { LabelHTMLAttributes } from "react";
import cn from "classnames";

import { TablerComponent } from "../../types";
import El from "../El/El";

interface Props extends TablerComponent, LabelHTMLAttributes<HTMLLabelElement> {
  aside?: string;
}

function FormLabel({ className, aside, children, ...rest }: Props) {
  const classes = cn("form-label", className);
  return (
    <El.Label className={classes} {...rest}>
      {aside && <span className="form-label-small">{aside}</span>}
      {children}
    </El.Label>
  );
}

export default FormLabel;

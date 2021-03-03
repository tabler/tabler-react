import React from "react";
import cn from "classnames";

import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

interface Props
  extends TablerComponentProps<
    "label",
    {
      aside?: string;
    }
  > {}

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

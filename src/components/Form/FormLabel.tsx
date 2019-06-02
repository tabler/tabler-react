import * as React from "react";
import cn from "classnames";

import { MouseEvents, PointerEvents } from "../../";

interface Props extends MouseEvents, PointerEvents {
  children?: React.ReactNode;
  className?: string;
  aside?: string;
}

function FormLabel({
  className,
  aside,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const classes = cn("form-label", className);
  return (
    <label
      className={classes}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {aside && <span className="form-label-small">{aside}</span>}
      {children}
    </label>
  );
}

FormLabel.displayName = "Form.Label";

export default FormLabel;

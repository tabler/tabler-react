import * as React from "react";
import cn from "classnames";

import { MouseEvents, FocusEvents, FormEvents, PointerEvents } from "../../";

interface Props extends MouseEvents, FocusEvents, FormEvents, PointerEvents {
  children?: React.ReactNode;
  className?: string;
}

function FormStaticText({
  className,
  children,
  onChange,
  onBlur,
  onFocus,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const classes = cn("form-control-plaintext", className);
  return (
    <div
      className={classes}
      onChange={onChange}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {children}
    </div>
  );
}

FormStaticText.displayName = "Form.StaticText";

export default FormStaticText;

// @flow

import * as React from "react";
import cn from "classnames";

import type {
  MouseEvents,
  FocusEvents,
  FormEvents,
  PointerEvents,
} from "../../";

type Props = {|
  ...MouseEvents,
  ...FocusEvents,
  ...FormEvents,
  ...PointerEvents,
  +children?: React.Node,
  +className?: string,
|};

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
}: Props): React.Node {
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

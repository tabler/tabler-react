// @flow

import * as React from "react";
import cn from "classnames";

import type { MouseEvents, PointerEvents } from "../../";

type Props = {|
  ...MouseEvents,
  ...PointerEvents,
  +children?: React.Node,
  +className?: string,
  +aside?: string,
|};

function FormLabel({
  className,
  aside,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props): React.Node {
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

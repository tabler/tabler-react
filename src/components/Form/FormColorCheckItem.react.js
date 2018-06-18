// @flow

import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

import type { MouseEvents, PointerEvents, FocusEvents } from "../../";

type Props = {|
  ...MouseEvents,
  ...PointerEvents,
  ...FocusEvents,
  +className?: string,
  +color: string,
|};

function FormColorCheckItem({
  className,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
  onFocus,
  onBlur,
}: Props): React.Node {
  const classes = cn(className);
  return (
    <Grid.Col auto className={classes}>
      <label className="colorinput">
        <input
          name="color"
          type="checkbox"
          value={color}
          className="colorinput-input"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <span className={`colorinput-color bg-${color}`} />
      </label>
    </Grid.Col>
  );
}

FormColorCheckItem.displayName = "Form.ColorCheckItem";

export default FormColorCheckItem;

// @flow

import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

type Props = {| +className?: string, +color: string |};

function FormColorCheckItem({ className, color, ...props }: Props): React.Node {
  const classes = cn(className);
  return (
    <Grid.Col auto className={classes} {...props}>
      <label className="colorinput">
        <input
          name="color"
          type="checkbox"
          value={color}
          className="colorinput-input"
        />
        <span className={`colorinput-color bg-${color}`} />
      </label>
    </Grid.Col>
  );
}

export default FormColorCheckItem;

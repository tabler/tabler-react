import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import Grid from "../Grid";
import { colors } from "../../colors";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  color: colors;
}

function FormColorCheckItem({ className, color, ...rest }: Props) {
  const classes = cn(className);
  return (
    <Grid.Col auto className={classes}>
      <label className="colorinput">
        <input
          type="checkbox"
          value={color}
          className="colorinput-input"
          {...rest}
        />
        <span className={`colorinput-color bg-${color}`} />
      </label>
    </Grid.Col>
  );
}

export default FormColorCheckItem;

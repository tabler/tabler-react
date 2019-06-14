import React, { HTMLAttributes, useState } from "react";
import cn from "classnames";
import Grid from "../Grid";

import { TablerComponent } from "../../types";

interface FormRatioProps extends HTMLAttributes<HTMLInputElement> {
  value?: number | string;
  onChange?: (event: React.ChangeEvent<EventTarget>) => any;
}

const FormRatio = function({
  className,
  onChange,
  defaultValue,
  value,
  ...rest
}: FormRatioProps) {
  const [internalValue, setInternalValue] = useState<
    string | string[] | undefined
  >(!onChange ? defaultValue : "0");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    if (onChange) {
      onChange(e);
    } else {
      const value = e.target.value;
      setInternalValue(value);
    }
  };

  const classes = cn(className);

  const _value = onChange ? value : internalValue;

  return (
    <Grid.Row className={classes} alignItems="center">
      <Grid.Col>
        <input
          type="range"
          className="form-control custom-range"
          onChange={handleOnChange}
          value={_value}
          step={1}
          {...rest}
        />
      </Grid.Col>
      <Grid.Col auto>
        <input
          type="number"
          className="form-control w-8"
          value={_value}
          onFocus={rest.onFocus}
          onBlur={rest.onBlur}
          readOnly
        />
      </Grid.Col>
    </Grid.Row>
  );
};

export default FormRatio;

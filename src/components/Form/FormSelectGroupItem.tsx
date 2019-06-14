import React, { HTMLAttributes } from "react";
import cn from "classnames";
import Icon from "../Icon";

export interface FormSelectGroupItemProps
  extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: string;
  type?: "radio" | "checkbox";
}

function FormSelectGroupItem({
  className,
  label,
  icon,
  type,
  ...rest
}: FormSelectGroupItemProps) {
  const classes = cn({ "selectgroup-item": true }, className);
  const btnClasses = cn("selectgroup-button", {
    "selectgroup-button-icon": icon,
  });
  const outputLabel = icon ? <Icon name={icon} /> : label;

  return (
    <label className={classes}>
      {type === "checkbox" ? (
        <input type="checkbox" className="selectgroup-input" {...rest} />
      ) : (
        <input type="radio" className="selectgroup-input" {...rest} />
      )}
      <span className={btnClasses}>{outputLabel}</span>
    </label>
  );
}

export default FormSelectGroupItem;

import React from "react";
import cn from "classnames";
import Icon from "../Icon";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface FormSelectGroupItemProps
  extends TablerComponentProps<
    "input",
    {
      label?: string;
      icon?: string;
      type?: "radio" | "checkbox";
      [key: string]: any;
    }
  > {}

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
        <El.Input type="checkbox" className="selectgroup-input" {...rest} />
      ) : (
        <El.Input type="radio" className="selectgroup-input" {...rest} />
      )}
      <span className={btnClasses}>{outputLabel}</span>
    </label>
  );
}

export default FormSelectGroupItem;

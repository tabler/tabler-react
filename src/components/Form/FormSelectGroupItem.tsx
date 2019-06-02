import * as React from "react";
import cn from "classnames";
import { Icon } from "..";
import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "../../";

interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
  className?: string;
  label?: string;
  value?: string | number;
  name: string;
  checked?: boolean;
  icon?: string;
  type?: "radio" | "checkbox";
}

function FormSelectGroupItem({
  className,
  label,
  name,
  value,
  checked,
  icon,
  type,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const classes = cn({ "selectgroup-item": true }, className);
  const btnClasses = cn("selectgroup-button", {
    "selectgroup-button-icon": icon,
  });
  const outputLabel = icon ? <Icon name={icon} /> : label;
  return (
    <label className={classes}>
      {type === "checkbox" ? (
        <input
          type="checkbox"
          name={name}
          value={value}
          className="selectgroup-input"
          checked={checked}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        />
      ) : (
        <input
          type="radio"
          name={name}
          value={value}
          className="selectgroup-input"
          checked={checked}
          onChange={onChange}
          onClick={onClick}
          onFocus={onFocus}
          onBlur={onBlur}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
        />
      )}
      <span className={btnClasses}>{outputLabel}</span>
    </label>
  );
}

FormSelectGroupItem.displayName = "Form.SelectGroupItem";

export default FormSelectGroupItem;

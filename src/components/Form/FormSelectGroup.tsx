import * as React from "react";
import cn from "classnames";
import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "../../";

interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
  children: React.ReactElement[];
  className?: string;
  pills?: boolean;
  canSelectMultiple?: boolean;
}

function FormSelectGroup({
  className,
  children,
  pills,
  canSelectMultiple,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const classes = cn(
    { selectgroup: true, "w-100": true, "selectgroup-pills": pills },
    className
  );
  return (
    <div
      className={classes}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {canSelectMultiple
        ? children.map(itm => React.cloneElement(itm, { type: "checkbox" }))
        : children}
    </div>
  );
}



export default FormSelectGroup;

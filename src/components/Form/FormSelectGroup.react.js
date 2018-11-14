// @flow

import * as React from "react";
import cn from "classnames";
import type {
  FormEvents,
  FocusEvents,
  MouseEvents,
  PointerEvents,
} from "../../";

type Props = {|
  ...FormEvents,
  ...FocusEvents,
  ...MouseEvents,
  ...PointerEvents,
  +children: Array<React.Element<any>>,
  +className?: string,
  +pills?: boolean,
  +canSelectMultiple?: boolean,
|};

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
}: Props): React.Node {
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

FormSelectGroup.displayName = "Form.SelectGroup";

export default FormSelectGroup;

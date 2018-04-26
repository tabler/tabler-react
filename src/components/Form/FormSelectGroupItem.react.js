// @flow

import * as React from "react";
import cn from "classnames";
import { Form, Icon } from "../";

type Props = {|
  +className?: string,
  +label?: string,
  +value?: string | number | boolean,
  +name: string,
  +checked?: boolean,
  +icon?: string,
|};

function FormSelectGroupItem({
  className,
  label,
  name,
  value,
  checked,
  icon,
}: Props): React.Node {
  const classes = cn({ "selectgroup-item": true }, className);
  const btnClasses = cn("selectgroup-button", {
    "selectgroup-button-icon": icon,
  });
  const outputLabel = icon ? <Icon name={icon} /> : label;
  return (
    <label className={classes}>
      <Form.Radio
        name={name}
        value={value}
        className="selectgroup-input"
        checked={checked}
      />
      <span className={btnClasses}>{outputLabel}</span>
    </label>
  );
}

FormSelectGroupItem.displayName = "Form.SelectGroupItem";

export default FormSelectGroupItem;

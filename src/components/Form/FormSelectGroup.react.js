// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
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
}: Props): React.Node {
  const classes = cn(
    { selectgroup: true, "w-100": true, "selectgroup-pills": pills },
    className
  );
  return (
    <div className={classes}>
      {canSelectMultiple
        ? children.map(itm => React.cloneElement(itm, { type: "checkbox" }))
        : children}
    </div>
  );
}

FormSelectGroup.displayName = "Form.SelectGroup";

export default FormSelectGroup;

// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +pills?: boolean,
|};

function FormSelectGroup({ className, children, pills }: Props): React.Node {
  const classes = cn(
    { selectgroup: true, "w-100": true, "selectgroup-pills": pills },
    className
  );
  return <div className={classes}>{children}</div>;
}

FormSelectGroup.displayName = "Form.SelectGroup";

export default FormSelectGroup;

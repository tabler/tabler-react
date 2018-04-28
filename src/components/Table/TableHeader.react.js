// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function TableHeader({ className, children, ...props }: Props): React.Node {
  const classes = cn(className);
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
}

TableHeader.displayName = "Table.Header";

export default TableHeader;

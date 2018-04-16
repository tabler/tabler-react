// @flow

import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

type Props = {| +children?: React.Node, +className?: string |};

function FormColorCheck({ className, children, ...props }: Props): React.Node {
  const classes = cn("gutters-xs", className);
  return (
    <Grid.Row className={classes} {...props}>
      {children}
    </Grid.Row>
  );
}

export default FormColorCheck;

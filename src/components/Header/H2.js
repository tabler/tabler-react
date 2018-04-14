// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

const H2 = ({ className, ...props }: Props): React.Node => {
  const classes: string = cn("mt-0 mb-4", className);
  return <Header as="h2" className={classes} size={2} {...props} />;
};

export default H2;

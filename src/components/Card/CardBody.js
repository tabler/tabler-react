// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string
|};

const CardBody = ({ className, ...props }: Props): React.Node => {
  const classes = cn("card-body", className);
  return <div className={classes} {...props} />;
};

export default CardBody;

// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +as: React.ElementType
|};

const CardTitle = ({
  className,
  as: Component,
  ...props
}: Props): React.Node => {
  const classes = cn("card-title", className);
  return <Component className={classes} {...props} />;
};

CardTitle.defaultProps = {
  as: "h3"
};

export default CardTitle;

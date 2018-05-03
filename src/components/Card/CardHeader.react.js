// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +backgroundURL?: string,
|};

function CardHeader({
  className,
  children,
  backgroundURL = "",
}: Props): React.Node {
  const classes = cn("card-header", className);

  return (
    <div
      className={classes}
      style={
        backgroundURL
          ? Object.assign({
              backgroundImage: `url(${backgroundURL})`,
            })
          : null
      }
    >
      {children}
    </div>
  );
}

CardHeader.displayName = "Card.Header";

export default CardHeader;

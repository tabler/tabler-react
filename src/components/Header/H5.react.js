// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function H5({ className, children }: Props): React.Node {
  const classes: string = cn("mt-0 mb-4", className);
  return (
    <Header RootComponent="h5" className={classes} size={5}>
      {children}
    </Header>
  );
}

export default H5;

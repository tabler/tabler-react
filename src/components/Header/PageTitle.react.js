// @flow

import * as React from "react";
import cn from "classnames";
import Header from "./Header.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function PageTitle({ className, children }: Props): React.Node {
  const classes: string = cn("page-title mb-5", className);
  return (
    <Header RootComponent="h3" className={classes} size={3}>
      {children}
    </Header>
  );
}

export default PageTitle;

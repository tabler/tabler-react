// @flow

import * as React from "react";
import cn from "classnames";
import { Container } from "../";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function PageContent({ className, children, ...rest }: Props): React.Node {
  const classes = cn("page-content", className);
  return (
    <div className={classes}>
      <Container>{children}</Container>
    </div>
  );
}

export default PageContent;

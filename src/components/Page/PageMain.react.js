// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node
|};

function PageMain({ children }: Props): React.Node {
  return <div className={"page-main"}>{children}</div>;
}

export default PageMain;

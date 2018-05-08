// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function PageOptions({ children }: Props): React.Node {
  return <div className="page-options d-flex">{children}</div>;
}

PageOptions.displayName = "Page.Options";

export default PageOptions;

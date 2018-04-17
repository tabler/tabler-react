// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node
|};

function PageHeader({ children }: Props): React.Node {
  return (
    <div className="page-header">
      <h1 className="page-title">{children}</h1>
    </div>
  );
}

export default PageHeader;

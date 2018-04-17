// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +value?: React.Node,
|};

function PageHeader({ value, children, ...rest }: Props): React.Node {
  return (
    <div className="page-header" {...rest}>
      <h1 className="page-title">{value || children}</h1>
    </div>
  );
}

export default PageHeader;

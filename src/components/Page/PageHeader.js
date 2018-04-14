// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
  +value?: React.Node
|};

const PageHeader = ({ value, children, ...rest }: Props): React.Node => (
  <div className="page-header" {...rest}>
    <h1 className="page-title">{value || children || null}</h1>
  </div>
);

export default PageHeader;

// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function PageSubTitle({ children }: Props): React.Node {
  return <div className="page-subtitle">{children}</div>;
}

PageSubTitle.displayName = "Page.SubTitle";

export default PageSubTitle;

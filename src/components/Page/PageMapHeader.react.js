// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function PageMapHeader({ children }: Props): React.Node {
  return <div className="map-header">{children}</div>;
}

PageMapHeader.displayName = "Page.MapHeader";

export default PageMapHeader;

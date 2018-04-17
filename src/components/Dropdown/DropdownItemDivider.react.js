// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node,
|};

function DropdownItemDivider(props: Props): React.Node {
  return <div className="dropdown-divider">{props.children}</div>;
}

export default DropdownItemDivider;

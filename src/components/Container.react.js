// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node
|};

function Container(props: Props): React.Node {
  return <div className={"container"}>{props.children}</div>;
}

export default Container;

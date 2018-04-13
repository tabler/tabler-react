// @flow

import * as React from "react";

type Props = {|
  +children?: React.Node
|};

const Container = (props: Props): React.Node => (
  <div className={"container"} {...props} />
);

export default Container;

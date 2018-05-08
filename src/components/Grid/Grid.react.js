// @flow

import * as React from "react";
import GridRow from "./GridRow.react";
import GridCol from "./GridCol.react";

type Props = {|
  +children: React.Node,
|};

function Grid(props: Props): React.Node {
  return props.children;
}

Grid.Row = GridRow;
Grid.Col = GridCol;

Grid.displayName = "Grid";

/** @component */
export default Grid;

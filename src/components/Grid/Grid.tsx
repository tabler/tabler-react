import * as React from "react";
import GridRow from "./GridRow";
import GridCol from "./GridCol";

interface Props {
  children: React.ReactNode;
}

function Grid(props: Props) {
  return props.children;
}

Grid.Row = GridRow;
Grid.Col = GridCol;

Grid.displayName = "Grid";

/** @component */
export default Grid;

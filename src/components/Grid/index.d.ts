import GridRow from "./GridRow";
import GridCol from "./GridCol";

declare namespace Grid {
  interface NestedComponents {
    Row: GridRow.Component;
    RowProps: GridRow.Props;
    Col: GridCol.Component;
    ColProps: GridCol.Props;
  }
}

declare const Grid: Grid.NestedComponents;
export = Grid;

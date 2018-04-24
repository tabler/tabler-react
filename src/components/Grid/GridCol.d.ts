import * as React from 'react';

declare namespace GridCol {
    export interface IGridColProps<T> extends React.HTMLProps<T> {
      className?: string;
      width?: number;
      sm?: number;
      smAuto?: boolean;
      md?: number;
      mdAuto?: boolean;
      lg?: number;
      lgAuto?: boolean;
      auto?: boolean;
    }
    export type GridColProps = IGridColProps<HTMLDivElement>;
}
declare class GridCol extends React.Component<GridCol.GridColProps> { }
export = GridCol;

import * as React from 'react';

declare namespace GridCol {
    export interface GridColProps extends React.Props<GridCol> {
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
}
declare class GridCol extends React.Component<GridCol.GridColProps> { }
export = GridCol;

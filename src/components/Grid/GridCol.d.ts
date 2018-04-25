import * as React from 'react';

declare namespace GridCol {
    interface IGridColProps<T> extends React.HTMLProps<T> {
      width?: number;
      sm?: number;
      smAuto?: boolean;
      md?: number;
      mdAuto?: boolean;
      lg?: number;
      lgAuto?: boolean;
      auto?: boolean;
    }
    type Props = IGridColProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
}
declare const GridCol: GridCol.Component;
export = GridCol;

import * as React from "react";
import Grid from "../Grid";
import { GridRowProps } from "../Grid/GridRow";

export interface FormImageCheckProps extends GridRowProps {}

function FormImageCheck({ children, ...rest }: FormImageCheckProps) {
  return (
    <Grid.Row gutters="sm" {...rest}>
      {children}
    </Grid.Row>
  );
}

export default FormImageCheck;

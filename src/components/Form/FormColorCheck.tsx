import * as React from "react";
import Grid from "../Grid";
import { GridRowProps } from "../Grid/GridRow";

interface FormColorCheckProps extends GridRowProps {}

function FormColorCheck({ children, ...rest }: FormColorCheckProps) {
  return (
    <Grid.Row gutters="xs" {...rest}>
      {children}
    </Grid.Row>
  );
}

export default FormColorCheck;

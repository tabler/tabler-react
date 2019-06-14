import React, { HTMLAttributes } from "react";
import Grid from "../Grid";
import { GridColProps } from "../Grid/GridCol";

export interface FormImageCheckItemProps
  extends HTMLAttributes<HTMLInputElement> {
  value: string | number;
  imageURL: string;
  col?: GridColProps;
  imgProps?: HTMLAttributes<HTMLImageElement>;
}

function FormImageCheckItem({
  className,
  col,
  imageURL,
  imgProps,
  ...rest
}: FormImageCheckItemProps) {
  return (
    <Grid.Col className={className} width={6} sm={4} {...col}>
      <label className="imagecheck mb-4">
        <input
          name="imagecheck"
          type="checkbox"
          className="imagecheck-input"
          {...rest}
        />
        <figure className="imagecheck-figure">
          <img
            src={imageURL}
            alt="Select"
            className="imagecheck-image"
            {...imgProps}
          />
        </figure>
      </label>
    </Grid.Col>
  );
}

export default FormImageCheckItem;

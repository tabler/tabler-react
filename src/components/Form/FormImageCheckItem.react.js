// @flow

import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +value: string | number,
  +image: string,
  +col?: {
    +width?: number,
    +sm?: number,
    +md?: number,
    +lg?: number,
  },
|};

function FormImageCheckItem({
  className,
  col: { width = 6, sm = 4, md = 0, lg = 0 } = {},
  image,
  value,
  ...props
}: Props): React.Node {
  return (
    <Grid.Col width={width} sm={sm} md={md} lg={lg}>
      <label className="imagecheck mb-4">
        <input
          name="imagecheck"
          type="checkbox"
          value={value}
          className="imagecheck-input"
        />
        <figure className="imagecheck-figure">
          <img src={image} alt="Select" className="imagecheck-image" />
        </figure>
      </label>
    </Grid.Col>
  );
}

export default FormImageCheckItem;

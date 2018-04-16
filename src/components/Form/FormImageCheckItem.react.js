// @flow

import * as React from "react";
import cn from "classnames";
import Grid from "../Grid";

type Props = {|
  +className?: string,
  +value: string | number,
  +imageURL: string,
  +col?: {
    +width?: number,
    +sm?: number,
    +md?: number,
    +lg?: number
  }
|};

function FormImageCheckItem({
  className,
  col: { width = 6, sm = 4, md = 0, lg = 0 } = {},
  imageURL,
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
          <img src={imageURL} alt="Select" className="imagecheck-image" />
        </figure>
      </label>
    </Grid.Col>
  );
}

export default FormImageCheckItem;

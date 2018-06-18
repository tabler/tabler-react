// @flow

import * as React from "react";
import Grid from "../Grid";
import type { MouseEvents, PointerEvents, FocusEvents } from "../../";

type Props = {|
  ...MouseEvents,
  ...PointerEvents,
  ...FocusEvents,
  +className?: string,
  +value: string | number,
  +imageURL: string,
  +col?: {|
    +width?: number,
    +sm?: number,
    +md?: number,
    +lg?: number,
  |},
|};

function FormImageCheckItem({
  className,
  col: { width = 6, sm = 4, md = 0, lg = 0 } = {},
  imageURL,
  value,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
  onFocus,
  onBlur,
}: Props): React.Node {
  return (
    <Grid.Col width={width} sm={sm} md={md} lg={lg}>
      <label className="imagecheck mb-4">
        <input
          name="imagecheck"
          type="checkbox"
          value={value}
          className="imagecheck-input"
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <figure className="imagecheck-figure">
          <img src={imageURL} alt="Select" className="imagecheck-image" />
        </figure>
      </label>
    </Grid.Col>
  );
}

FormImageCheckItem.displayName = "Form.ImageCheckItem";

export default FormImageCheckItem;

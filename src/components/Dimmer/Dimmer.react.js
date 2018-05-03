// @flow

import * as React from "react";
import cn from "classnames";
import Loader from "../Loader";

import DimmerContent from "./DimmerContent.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +active?: boolean,
  +loader?: boolean,
|};

function Dimmer({ className, children, active, loader }: Props): React.Node {
  const classes = cn({ dimmer: true, active: active }, className);
  return (
    <div className={classes}>
      <React.Fragment>
        {loader && <Loader />}
        <DimmerContent>{children}</DimmerContent>
      </React.Fragment>
    </div>
  );
}

Dimmer.displayName = "Dimmer";

Dimmer.Content = DimmerContent;

export default Dimmer;

// @flow

import * as React from "react";
import cn from "classnames";

// TODO: Add onClick Event Handler
// TODO : Add  color prop
type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +active?: boolean,
|};

function PricingCardButton({
  className,
  children,
  RootComponent,
  active,
}: Props): React.Node {
  const classes = cn("text-center", "mt-6");
  const Component = RootComponent || "a";
  const componentClasses = cn(
    "btn",
    active ? "btn-green" : "btn-secondary",
    "btn-block",
    className
  );
  return (
    <div className={classes}>
      <Component className={componentClasses}>{children}</Component>
    </div>
  );
}

PricingCardButton.displayName = "PricingCard.Button";

export default PricingCardButton;

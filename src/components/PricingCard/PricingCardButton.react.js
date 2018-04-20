// @flow

import * as React from "react";
import cn from "classnames";

// TODO: Add color for active button from main PricingCard component
// TODO: Refactoring
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
  const classes = cn("text-center", "mt-6", className);
  const Component = RootComponent || "a";
  return active ? (
    <div className={classes}>
      <Component className={cn("btn", "btn-green", "btn-block", className)}>
        {children}
      </Component>
    </div>
  ) : (
    <div className={classes}>
      <Component className={cn("btn", "btn-secondary", "btn-block", className)}>
        {children}
      </Component>
    </div>
  );
}

export default PricingCardButton;

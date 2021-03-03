import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

import { colors } from "../../colors";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export interface BadgeAddOnProps extends TablerComponentProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * Display an icon of this name
   */
  icon?: string;
  /**
   * Background color
   */
  color?: colors;
  /**
   * @deprecated use 'as'
   */
  link?: boolean;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  /**
   * Render component as something else
   */
}

/**
 * Appended something to the inside of the badge
 */
export function BadgeAddOn({
  children,
  className,
  icon,
  color,
  as,
  RootComponent,
  ...rest
}: BadgeAddOnProps) {
  const classes = cn("badge-addon", { [`badge-${color}`]: color }, className);

  const childrenForAll = (
    <React.Fragment>
      {icon && <Icon name={icon} />}
      {children}
    </React.Fragment>
  );

  const Component = RootComponent || as || "span";

  return (
    <Component className={classes} {...rest}>
      {childrenForAll}
    </Component>
  );
}

export default BadgeAddOn;

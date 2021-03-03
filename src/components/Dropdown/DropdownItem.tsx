import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import Badge from "../Badge";
import { colors } from "../../colors";
import El from "../El/El";
import { TablerComponentProps } from "../../helpers/createTablerElement";

export type DropdownItemProps<
  As extends React.ElementType = "a"
> = TablerComponentProps<
  As,
  {
    /**
     * Display an Icon to the left of DropdownItem content
     */
    icon?: string;
    /**
     * The content of the DropdownItem if children is not used
     */
    value?: string;
    /**
     * Display a badge with this content to the right of DropdownItem content
     */
    badge?: string;
    /**
     * The type/color of Badge to be displayed
     */
    badgeType?: colors;
    /**
     * A component to be used instead of an <a> tag
     * @deprecated use 'as'
     */
    RootComponent?: React.ElementType;
  }
>;

/**
 * An individual item that should be contained within a Dropdown.Menu
 */
function DropdownItem<As extends React.ElementType = "a">({
  className,
  icon,
  value,
  children,
  badge,
  badgeType,
  as,
  RootComponent,
  ...rest
}: DropdownItemProps<As>) {
  const classes = cn({ "dropdown-item": true }, className);
  const Component = RootComponent || as || El.A;

  return (
    <Component className={classes} {...rest}>
      {badge && (
        <span className="float-right">
          <Badge color={badgeType}>{badge}</Badge>
        </span>
      )}
      {icon && (
        <React.Fragment>
          <Icon name={icon} className="dropdown-icon" />{" "}
        </React.Fragment>
      )}
      {value}
      {children}
    </Component>
  );
}

/** @component */
export default DropdownItem;

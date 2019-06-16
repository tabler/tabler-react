import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";
import Badge from "../Badge";
import { colors } from "../../colors";
import { TablerComponent } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface DropdownItemProps
  extends ELProps,
    Omit<React.HTMLProps<React.ReactHTMLElement<HTMLAnchorElement>>, "as"> {
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
  as?: React.ElementType;
}

/**
 * An individual item that should be contained within a Dropdown.Menu
 */
function DropdownItem({
  className,
  icon,
  value,
  children,
  badge,
  badgeType,
  as = El.A,
  RootComponent,
  ...rest
}: DropdownItemProps) {
  const classes = cn({ "dropdown-item": true }, className);
  const Component = RootComponent || as;

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

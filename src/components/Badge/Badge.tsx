import React, { useState, forwardRef } from "react";
import cn from "classnames";
import BadgeAddOn from "./BadgeAddOn";

import { HTMLPropsWithoutRef } from "../../types";
import { colors, softColors } from "../../colors";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface BadgeProps
  extends ELProps,
    Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "as"> {
  /**
   * Rounded corners
   */
  rounded?: boolean;
  /**
   * Background color
   */
  color?: colors;
  /**
   * URL to an image/avatar to display inside
   */
  avatar?: string;
  /**
   * Add a X to remove the tag
   */
  remove?: boolean;
  /**
   * When the remove X is clicked
   */
  onRemoveClick?: React.MouseEventHandler;
  /**
   * Append something to the inside of the badge
   */
  addOn?: React.ReactNode;
  /**
   * The addon icon
   */
  addOnIcon?: string;
  /**
   * The addon background color
   */
  addOnColor?: string;
  /**
   * When the addon is clicked
   */
  onAddOnClick?: React.MouseEventHandler;
  /**
   * @deprecated use 'as'
   */
  link?: true;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  /**
   * Text color
   */
  textColor?: colors;
  /**
   * Rounded corners
   */
  pill?: boolean;
  /**
   * Render this component as something else
   */
  as?: React.ElementType;
}

export const Badge = forwardRef(function(
  {
    children,
    className,
    rounded,
    color = "primary",
    avatar,
    remove,
    addOn,
    addOnIcon,
    addOnColor,
    onRemoveClick,
    onAddOnClick,
    RootComponent,
    link,
    href,
    as = "span",
    textColor = "white",
    pill,
    ...rest
  }: BadgeProps,
  ref
) {
  const [isDeleted, setIsDeleted] = useState(false);
  const handleOnRemoveClick = (): void => {
    setIsDeleted(true);
  };

  const classes = cn(
    {
      badge: true,
      expanded: true,
      "badge-pill": rounded || pill,
      [`bg-${color}`]: color,
      [`text-${textColor}`]: softColors.includes(color) ? false : textColor,
    },
    className
  );

  if (isDeleted) {
    return null;
  }

  const childrenForAll = (
    <React.Fragment>
      {avatar && (
        <span
          className="Badge-avatar avatar"
          style={{ backgroundImage: `url(${avatar})` }}
        />
      )}
      {children}
      {(addOn || addOnIcon) && (
        <BadgeAddOn icon={addOnIcon} color={addOnColor} onClick={onAddOnClick}>
          {addOn}
        </BadgeAddOn>
      )}
      {remove && onRemoveClick ? (
        <BadgeAddOn onClick={onRemoveClick} link icon="x" />
      ) : (
        remove && <BadgeAddOn onClick={handleOnRemoveClick} link icon="x" />
      )}
    </React.Fragment>
  );

  const Component = RootComponent || as;
  return (
    <Component className={classes} {...rest}>
      {childrenForAll}
    </Component>
  );
});

export default Badge;

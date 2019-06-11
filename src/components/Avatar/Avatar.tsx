import * as React from "react";
import Icon from "../Icon";
import cn from "classnames";
import AvatarList from "./AvatarList";

import { MouseEvents, PointerEvents, TablerComponent } from "../../types";
import { colors } from "../../colors";
import Badge from "../Badge";

export interface Props extends TablerComponent, MouseEvents, PointerEvents {
  /**
   * The URL of the image to be displayed
   */
  imageURL?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  /**
   * Display a colored status dot with the avatar
   */
  status?: colors;
  /**
   * Displays the user icon as a placeholder
   */
  placeholder?: boolean;
  /**
   * Render an icon instead of an imageURL
   */
  icon?: string;
  /**
   * The background and font color of the circle
   */
  color?: colors;
}

/**
 * Renders a single circular avatar
 */
function Avatar({
  className,
  children,
  imageURL,
  style,
  size,
  status,
  placeholder,
  icon,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  const classes = cn(
    {
      avatar: true,
      [`avatar-${size}`]: !!size,
      [`bg-${color}`]: !!color,
    },
    className
  );
  const _icon = icon || placeholder ? "user" : null;

  return (
    <span
      className={classes}
      style={
        imageURL
          ? Object.assign(
              {
                backgroundImage: `url(${imageURL})`,
              },
              style
            )
          : style
      }
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {_icon && <Icon name={_icon} />}
      {status && <Badge color={status} />}
      {children}
    </span>
  );
}

Avatar.List = AvatarList;

export default Avatar;

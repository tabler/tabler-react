// @flow

import * as React from "react";
import { Icon } from "../";
import cn from "classnames";
import AvatarList from "./AvatarList.react";

import type { MouseEvents, PointerEvents } from "../../";

export type Props = {|
  ...MouseEvents,
  ...PointerEvents,
  +children?: React.Node,
  +className?: string,
  /**
   * The URL of the image to be displayed
   */
  +imageURL?: string,
  +style?: Object,
  +size?: "sm" | "md" | "lg" | "xl" | "xxl",
  /**
   * Display a colored status dot with the avatar
   */
  +status?: "grey" | "red" | "yellow" | "green",
  /**
   * Displays the user icon as a placeholder
   */
  +placeholder?: boolean,
  /**
   * Render an icon instead of an imageURL
   */
  +icon?: string,
  /**
   * The background and font color of the circle
   */
  +color?: string,
|};

/**
 * Renders a single circular avatar
 */
function Avatar({
  className,
  children,
  imageURL,
  style,
  size = "",
  status,
  placeholder,
  icon,
  color = "",
  onClick,
  onMouseEnter,
  onMouseLeave,
  onPointerEnter,
  onPointerLeave,
}: Props): React.Node {
  const classes = cn(
    {
      avatar: true,
      [`avatar-${size}`]: !!size,
      "avatar-placeholder": placeholder,
      [`avatar-${color}`]: !!color,
    },
    className
  );
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
      {icon && <Icon name={icon} />}
      {status && <span className={`avatar-status bg-${status}`} />}
      {children}
    </span>
  );
}

Avatar.List = AvatarList;

export default Avatar;

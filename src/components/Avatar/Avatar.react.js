// @flow

import * as React from "react";
import { Icon } from "../";
import cn from "classnames";
import AvatarList from "./AvatarList.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +imageURL?: string,
  +style?: Object,
  +size?: "sm" | "md" | "lg" | "xl" | "xxl",
  +status?: "grey" | "red" | "yellow" | "green",
  +placeholder?: boolean,
  +icon?: string,
  +color?: string,
|};

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
    >
      {icon && <Icon name={icon} />}
      {status && <span className={`avatar-status bg-${status}`} />}
      {children}
    </span>
  );
}

Avatar.List = AvatarList;

export default Avatar;

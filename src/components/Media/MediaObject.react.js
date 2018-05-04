// @flow

import * as React from "react";
import cn from "classnames";

import { Avatar } from "../../components";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +avatar?: boolean,
  +objectURL?: string,
  +size?: "sm" | "md" | "lg" | "xl" | "xxl",
  +rounded?: boolean,
  +alt?: string,
|};

function MediaObject({
  className,
  children,
  avatar,
  objectURL,
  size,
  rounded,
  alt,
}: Props): React.Node {
  const classes = cn("media-object", className);
  const imageClasses = cn({ "d-flex": true, rounded });

  const mediaImage = avatar ? (
    <Avatar size={size} imageURL={objectURL} />
  ) : objectURL ? (
    <img className={imageClasses} src={objectURL} alt={alt} />
  ) : null;

  return (
    <div className={classes}>
      {mediaImage}
      {children}
    </div>
  );
}

export default MediaObject;

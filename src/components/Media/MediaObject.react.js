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
|};

function MediaObject({
  className,
  children,
  avatar,
  objectURL,
  size = "xxl",
}: Props): React.Node {
  const classes = cn("media-object", className);
  return avatar ? (
    <div className={classes}>
      <Avatar size={size} imageURL={objectURL} />
      {children}
    </div>
  ) : (
    <div className={classes}>{children}</div>
  );
}

export default MediaObject;

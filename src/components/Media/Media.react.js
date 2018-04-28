// @flow

import * as React from "react";
import cn from "classnames";
import { Avatar } from "../../components";

import MediaBody from "./MediaBody.react";
import MediaHeading from "./MediaHeading.react";
import MediaList from "./MediaList.react";
import MediaObject from "./MediaObject.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +workTitle: string,
  +avatarURL: string,
  +facebook?: string,
  +twitter?: string,
  +phone?: string,
  +skype?: string,
  +avatarSize?: string,
|};

function Media({ className, children }: Props): React.Node {
  const classes = cn("media", className);
  return <div className={classes}>{children}</div>;
}

Media.Body = MediaBody;
Media.Heading = MediaHeading;
Media.List = MediaList;
Media.Object = MediaObject;

export default Media;

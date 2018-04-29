// @flow

import * as React from "react";
import cn from "classnames";

import MediaBody from "./MediaBody.react";
import MediaHeading from "./MediaHeading.react";
import MediaList from "./MediaList.react";
import MediaObject from "./MediaObject.react";
import MediaBodySocial from "./MediaBodySocial.react";
import MediaListItem from "./MediaListItem.react";

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
Media.BodySocial = MediaBodySocial;
Media.Heading = MediaHeading;
Media.List = MediaList;
Media.ListItem = MediaListItem;
Media.Object = MediaObject;

export default Media;

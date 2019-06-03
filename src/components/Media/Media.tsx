import * as React from "react";
import cn from "classnames";

import MediaBody from "./MediaBody";
import MediaHeading from "./MediaHeading";
import MediaList from "./MediaList";
import MediaObject from "./MediaObject";
import MediaBodySocial from "./MediaBodySocial";
import MediaListItem from "./MediaListItem";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function Media({ className, children }: Props) {
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

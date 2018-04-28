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

function Media({
  className,
  children,
  name,
  workTitle,
  avatarURL,
  facebook = "",
  twitter = "",
  phone = "",
  skype = "",
  avatarSize = "xxl",
}: Props): React.Node {
  const classes = cn("media", className);
  return (
    <div className={classes}>
      <Avatar size={avatarSize} className="mr-5" imageURL={avatarURL} />
      <MediaBody
        name={name}
        workTitle={workTitle}
        facebook={facebook}
        twitter={twitter}
        phone={phone}
        skype={skype}
      >
        {children}
      </MediaBody>
    </div>
  );
}

Media.Body = MediaBody;
Media.Heading = MediaHeading;
Media.List = MediaList;
Media.Object = MediaObject;

export default Media;

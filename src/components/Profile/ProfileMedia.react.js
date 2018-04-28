// @flow

import * as React from "react";
import cn from "classnames";
import ProfileMediaBody from "./ProfileMediaBody.react";
import { Avatar } from "../../components";

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
|};

function ProfileMedia({
  className,
  children,
  name,
  workTitle,
  avatarURL,
  facebook = "",
  twitter = "",
  phone = "",
  skype = "",
}: Props): React.Node {
  const classes = cn("media", className);
  return (
    <div className={classes}>
      <Avatar size="xxl" className="mr-5" imageURL={avatarURL} />
      <CardMediaBody
        name={name}
        workTitle={workTitle}
        facebook={facebook}
        twitter={twitter}
        phone={phone}
        skype={skype}
      >
        {children}
      </CardMediaBody>
    </div>
  );
}

export default ProfileMedia;

// @flow

import * as React from "react";
import cn from "classnames";

import { Card, Header, Button, Icon } from "../../components";

import ProfileImage from "./ProfileImage.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +avatarURL?: string,
  +twitterURL?: string,
  +backgroundURL?: string,
|};

function Profile({
  className,
  children,
  name,
  avatarURL = "",
  twitterURL = "",
  backgroundURL = "",
}: Props): React.Node {
  const classes = cn("card card-profile", className);
  return (
    <div className={classes}>
      <Card.Header backgroundURL={backgroundURL} />
      <Card.Body className="text-center">
        <ProfileImage avatarURL={avatarURL} />
        <Header.H3 className="mb-3">{name}</Header.H3>
        <p className="mb-4">{children}</p>
        <Button outline color="primary" size="sm">
          <Icon name="twitter" prefix="fa" /> Follow
        </Button>
      </Card.Body>
    </div>
  );
}

Profile.Image = ProfileImage;

export default Profile;

import * as React from "react";
import cn from "classnames";

import Card from "../Card";
import SocialNetworksList from "../SocialNetworksList";
import Header from "../Header";

import ProfileImage from "./ProfileImage";

export interface Props {
  children?: React.ReactNode;
  className?: string;
  name: string;
  avatarURL?: string;
  twitterURL?: string;
  backgroundURL?: string;
  bio?: string;
}

function Profile({
  className,
  children,
  name,
  avatarURL = "",
  twitterURL = "",
  backgroundURL = "",
  bio,
}: Props) {
  const classes = cn("card-profile", className);
  return (
    <Card className={classes}>
      <Card.Header backgroundURL={backgroundURL} />
      <Card.Body className="text-center">
        <ProfileImage avatarURL={avatarURL} />
        <Header.H3 className="mb-3">{name}</Header.H3>
        <p className="mb-4">{bio || children}</p>
        <SocialNetworksList
          itemsObjects={[{ name: "twitter", label: "Follow" }]}
          prefix="fa"
          asButtons
        />
      </Card.Body>
    </Card>
  );
}

Profile.Image = ProfileImage;

export default Profile;

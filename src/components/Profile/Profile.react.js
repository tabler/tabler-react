// @flow

import * as React from "react";
import cn from "classnames";

import {
  Card,
  Header,
  SocialNetworksList,
  Media,
  Avatar,
} from "../../components";

import ProfileImage from "./ProfileImage.react";

import type { itemObject } from "../SocialNetworksList/SocialNetworksList.react";

export type PropsForAll = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +avatarURL?: string,
  +twitterURL?: string,
  +facebookURL?: string,
  +socialNetworksObjects?: Array<itemObject>,
|};

type layout1 = {|
  ...PropsForAll,
  +layout?: 1,
  +backgroundURL?: string,
  +bio?: string,
|};

type layout2 = {|
  ...PropsForAll,
  +layout: 2,
  +jobTitle?: string,
|};

type Props = layout1 | layout2;

function Profile(props: Props): React.Node {
  const {
    className,
    children,
    name,
    avatarURL = "",
    socialNetworksObjects,
  } = props;
  const classes = cn({ "card-profile": props.layout === 1 }, className);
  if (!props.layout || props.layout === 1) {
    const { bio, backgroundURL = "" } = props;
    return (
      <Card className={classes}>
        <Card.Header backgroundURL={backgroundURL} />
        <Card.Body className="text-center">
          <ProfileImage avatarURL={avatarURL} />
          <Header.H3 className="mb-3">{name}</Header.H3>
          <p className="mb-4">{bio || children}</p>
          <SocialNetworksList
            itemsObjects={socialNetworksObjects}
            prefix="fa"
            asButtons
          />
        </Card.Body>
      </Card>
    );
  }
  if (props.layout === 2) {
    const { jobTitle = "" } = props;
    return (
      <Card className={classes}>
        <Card.Body>
          <Media>
            <Avatar size="xxl" className="mr-5" imageURL={avatarURL} />
            <Media.BodySocial
              name={name}
              workTitle={jobTitle}
              itemsObjects={socialNetworksObjects}
            />
          </Media>
        </Card.Body>
      </Card>
    );
  }
}

Profile.Image = ProfileImage;

export default Profile;

// @flow

import * as React from "react";
import { List, Icon, Media, SocialNetworksList } from "../../components";

export type Props = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +workTitle: string,
  +facebook?: string,
  +twitter?: string,
  +phone?: string,
  +skype?: string,
|};

function MediaBodySocial({
  className,
  children,
  name,
  workTitle,
  facebook = "",
  twitter = "",
  phone = "",
  skype = "",
}: Props): React.Node {
  let fbIcon;
  let twitterIcon;
  let phoneIcon;
  let skypeIcon;

  if (facebook) {
    fbIcon = (
      <List.Item inline>
        <a href="/Profile">
          <Icon prefix="fa" name="facebook" />
        </a>
      </List.Item>
    );
  }

  if (twitter) {
    twitterIcon = (
      <List.Item inline>
        <a href="/Profile" data-original-title="Twitter">
          <Icon prefix="fa" name="twitter" />
        </a>
      </List.Item>
    );
  }

  if (phone) {
    phoneIcon = (
      <List.Item inline>
        <a href="/Profile" data-original-title="1234567890">
          <Icon prefix="fa" name="phone" />
        </a>
      </List.Item>
    );
  }

  if (skype) {
    skypeIcon = (
      <List.Item inline>
        <a href="/Profile" data-original-title="@skypename">
          <Icon prefix="fa" name="skype" />
        </a>
      </List.Item>
    );
  }
  return (
    <Media.Body>
      <h4 className="m-0">{name}</h4>
      <p className="text-muted mb-0">{workTitle}</p>
      <SocialNetworksList className="mb-0 mt-2">
        {fbIcon}
        {twitterIcon}
        {phoneIcon}
        {skypeIcon}
      </SocialNetworksList>
      {children}
    </Media.Body>
  );
}

export default MediaBodySocial;

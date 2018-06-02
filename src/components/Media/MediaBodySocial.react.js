// @flow

import * as React from "react";
import { List, Media, Tooltip } from "../";

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
      <List.Item className="list-inline-item">
        <Tooltip content="Facebook" placement="top">
          <a href="/Profile">
            <i className="fa fa-facebook" />
          </a>
        </Tooltip>
      </List.Item>
    );
  }

  if (twitter) {
    twitterIcon = (
      <List.Item className="list-inline-item">
        <Tooltip content="Twitter" placement="top">
          <a href="/Profile">
            <i className="fa fa-twitter" />
          </a>
        </Tooltip>
      </List.Item>
    );
  }

  if (phone) {
    phoneIcon = (
      <List.Item className="list-inline-item">
        <Tooltip content="+1 234-567-8901" placement="top">
          <a href="/Profile">
            <i className="fa fa-phone" />
          </a>
        </Tooltip>
      </List.Item>
    );
  }

  if (skype) {
    skypeIcon = (
      <List.Item className="list-inline-item">
        <Tooltip content="@skypename" placement="top">
          <a href="/Profile">
            <i className="fa fa-skype" />
          </a>
        </Tooltip>
      </List.Item>
    );
  }
  return (
    <Media.Body>
      <h4 className="m-0">{name}</h4>
      <p className="text-muted mb-0">{workTitle}</p>
      <List className="social-links list-inline mb-0 mt-2">
        {fbIcon}
        {twitterIcon}
        {phoneIcon}
        {skypeIcon}
      </List>
      {children}
    </Media.Body>
  );
}

export default MediaBodySocial;

// @flow

import * as React from "react";

type Props = {|
  +avatarURL: string,
|};

function CardProfileImage({ avatarURL }: Props): React.Node {
  return <img className="card-profile-img" alt="Profile" src={avatarURL} />;
}

export default CardProfileImage;

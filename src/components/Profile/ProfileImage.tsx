import * as React from "react";

type Props = {
  avatarURL: string;
};

function ProfileImage({ avatarURL }: Props) {
  return <img className="card-profile-img" alt="Profile" src={avatarURL} />;
}

export default ProfileImage;

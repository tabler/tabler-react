// @flow
import * as React from "react";
import cn from "classnames";
import Card from "../Card";
/*
totalLikes
totalViews
avatarURL
dateString
date
userDisplayName
imageURL
*/
// TODO: ImagePosition:bottom | top

type Props = {|
  +children?: string,
  +className?: string,
  +imageURL?: string,
|};

function GalleryCard({ children, className, imageURL }: Props) {
  const cardClassName = cn("p-3", className);
  return <Card className={cardClassName}>{children}</Card>;
}

export default GalleryCard;

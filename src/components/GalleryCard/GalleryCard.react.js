// @flow
import * as React from "react";
import cn from "classnames";
import Card from "../Card";

import GalleryCardDetails from "./GalleryCardDetails.react";
import GalleryCardFooter from "./GalleryCardFooter.react";
import GalleryCardIconGroup from "./GalleryCardIconGroup.react";
import GalleryCardIconItem from "./GalleryCardIconItem.react";
import GalleryCardImage from "./GalleryCardImage.react";
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

|};

function GalleryCard({ children, className, imageURL }: Props) {
  const cardClassName = cn("p-3", className);
  return <Card className={cardClassName}>{children}</Card>;
}

GalleryCard.Details=GalleryCardDetails;
GalleryCard.Footer=GalleryCardFooter;
GalleryCard.IconGroup=GalleryCardIconGroup;
GalleryCard.IconItem=GalleryCardIconItem;
GalleryCard.Image=GalleryCardImage;



export default GalleryCard;
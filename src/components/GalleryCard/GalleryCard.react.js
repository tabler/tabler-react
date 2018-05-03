// @flow
import * as React from "react";
import cn from "classnames";
import Card from "../Card";

import GalleryCardDetails from "./GalleryCardDetails.react";
import GalleryCardFooter from "./GalleryCardFooter.react";
import GalleryCardIconGroup from "./GalleryCardIconGroup.react";
import GalleryCardIconItem from "./GalleryCardIconItem.react";
import GalleryCardImage from "./GalleryCardImage.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
|};

function GalleryCard({ children, className }: Props) {
  const cardClassName = cn("p-3", className);
  return <Card className={cardClassName}>{children}</Card>;
}

GalleryCard.Details = GalleryCardDetails;
GalleryCard.Footer = GalleryCardFooter;
GalleryCard.IconGroup = GalleryCardIconGroup;
GalleryCard.IconItem = GalleryCardIconItem;
GalleryCard.Image = GalleryCardImage;

export default GalleryCard;

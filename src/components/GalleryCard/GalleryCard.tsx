import * as React from "react";
import cn from "classnames";
import Card from "../Card";

import GalleryCardDetails from "./GalleryCardDetails";
import GalleryCardFooter from "./GalleryCardFooter";
import GalleryCardIconGroup from "./GalleryCardIconGroup";
import GalleryCardIconItem from "./GalleryCardIconItem";
import GalleryCardImage from "./GalleryCardImage";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

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

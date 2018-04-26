// @flow
// GalleryCardDetails Component
import * as React from "react";
import cn from "classnames";

import Avatar from "../Avatar";

type Props = {|
  +className?: string,
  +children?: React.Node,
  +avatarURL?: string,
  +fullName?: string,
  +imagePostDateString?: string,
|};

function GalleryCardDetails({
  className,
  children,
  avatarURL,
  fullName,
  imagePostDateString,
}: Props) {
  //classes
  const classes = cn("d-flex", "align-items-center", "px-2");
  const avatarClasses = cn("mr-3");
  const imagePostDateClasses = cn("d-block text-muted");

  //conditions
  const hasOtherDetails = fullName !== null || imagePostDateString !== null;

  //components
  const avatar = (
    <Avatar imageURL={avatarURL} size="md" className={avatarClasses} />
  );

  const otherDetails = (
    <div>
      <div>{fullName}</div>
      <small className={imagePostDateClasses}>
        {" "}
        {imagePostDateString}
      </small>{" "}
    </div>
  );

  return (
    <div className={classes}>
      {avatarURL && avatar}
      {hasOtherDetails && otherDetails}
      {children}
    </div>
  );
}

export default GalleryCardDetails;

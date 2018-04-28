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
  +dateString?: string,
|};

function GalleryCardDetails({
  className,
  children,
  avatarURL,
  fullName,
  imagePostDateString,
}: Props): React.Node {
  //classes

  const avatarClasses = cn("mr-3");
  const imagePostDateClasses = cn("d-block text-muted");

  //conditions
  const hasOtherDetails = fullName !== null || imagePostDateString !== null;

  //components
  const avatar = (
    <Avatar imageURL={avatarURL} size="md" className={avatarClasses} />
  );
  // TODO: The following could be a seperate component
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
    <React.Fragment>
      {avatarURL && avatar}
      {hasOtherDetails && otherDetails}
      {children}
    </React.Fragment>
  );
}

GalleryCardDetails.displayName = "GalleryCard.Details";

export default GalleryCardDetails;

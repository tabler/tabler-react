// GalleryCardDetails Component
import * as React from "react";
import cn from "classnames";

import Avatar from "../Avatar";

interface Props {
  className?: string;
  children?: React.ReactNode;
  avatarURL?: string;
  fullName?: string;
  dateString?: string;
}

function GalleryCardDetails({
  className,
  children,
  avatarURL,
  fullName,
  dateString,
}: Props) {
  //classes

  const avatarClasses = cn("mr-3");
  const dateStringClasses = cn("d-block text-muted");

  //conditions
  const hasOtherDetails = fullName !== null || dateString !== null;

  //components
  const avatar = (
    <Avatar imageURL={avatarURL} size="md" className={avatarClasses} />
  );
  // TODO: The following could be a seperate component
  const otherDetails = (
    <div>
      <div>{fullName}</div>
      <small className={dateStringClasses}> {dateString}</small>{" "}
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



export default GalleryCardDetails;

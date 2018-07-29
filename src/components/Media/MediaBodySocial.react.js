// @flow

import * as React from "react";
import { Media, SocialNetworksList } from "../";
import type { itemObject } from "../SocialNetworksList/SocialNetworksList.react";

export type Props = {|
  +children?: React.Node,
  +className?: string,
  +name: string,
  +workTitle: string,
  +itemsObjects?: Array<itemObject>,
  +items?: Array<React.Node>,
|};

function MediaBodySocial({
  className,
  children,
  name,
  workTitle,
  itemsObjects,
  items,
}: Props): React.Node {
  return (
    <Media.Body>
      <h4 className="m-0">{name}</h4>
      <p className="text-muted mb-0">{workTitle}</p>
      <SocialNetworksList
        className="mb-0 mt-2"
        items={items}
        itemsObjects={itemsObjects}
      />
      {children}
    </Media.Body>
  );
}

export default MediaBodySocial;

import Media from "./Media";

import MediaBody from "./MediaBody";
import MediaHeading from "./MediaHeading";
import MediaList from "./MediaList";
import MediaObject from "./MediaObject";
import MediaBodySocial from "./MediaBodySocial";
import MediaListItem from "./MediaListItem";

const CompoundMedia = Object.assign(Media, {
  Body: MediaBody,
  BodySocial: MediaBodySocial,
  Heading: MediaHeading,
  List: MediaList,
  ListItem: MediaListItem,
  Object: MediaObject,
});

export {
  CompoundMedia as default,
  Media,
  MediaBody,
  MediaBodySocial,
  MediaHeading,
  MediaList,
  MediaListItem,
  MediaObject,
};

import Media from "./Media";

import MediaBody from "./MediaBody";
import MediaHeading from "./MediaHeading";
import MediaList from "./MediaList";
import MediaObject from "./MediaObject";
import MediaBodySocial from "./MediaBodySocial";
import MediaListItem from "./MediaListItem";
import MediaContent from "./MediaContent";

const CompoundMedia = Media as typeof Media & {
  Body: typeof MediaBody;
  BodySocial: typeof MediaBodySocial;
  Heading: typeof MediaHeading;
  List: typeof MediaList;
  ListItem: typeof MediaListItem;
  Object: typeof MediaObject;
  Content: typeof MediaContent;
};

CompoundMedia.Body = MediaBody;
CompoundMedia.BodySocial = MediaBodySocial;
CompoundMedia.Heading = MediaHeading;
CompoundMedia.List = MediaList;
CompoundMedia.ListItem = MediaListItem;
CompoundMedia.Object = MediaObject;
CompoundMedia.Content = MediaContent;

export {
  CompoundMedia as default,
  Media,
  MediaBody,
  MediaBodySocial,
  MediaHeading,
  MediaList,
  MediaListItem,
  MediaObject,
  MediaContent,
};

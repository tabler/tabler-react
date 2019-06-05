import Media from "./Media";

import MediaBody from "./MediaBody";
import MediaHeading from "./MediaHeading";
import MediaList from "./MediaList";
import MediaObject from "./MediaObject";
import MediaBodySocial from "./MediaBodySocial";
import MediaListItem from "./MediaListItem";

// @ts-ignore
Media.Body = MediaBody;
// @ts-ignore
Media.BodySocial = MediaBodySocial;
// @ts-ignore
Media.Heading = MediaHeading;
// @ts-ignore
Media.List = MediaList;
// @ts-ignore
Media.ListItem = MediaListItem;
// @ts-ignore
Media.Object = MediaObject;
// @ts-ignore

export { Media as default };

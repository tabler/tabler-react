export type StandardColors =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type AdditionalColors =
  | "light"
  | "dark"
  | "body"
  | "muted"
  | "reset"
  | "black-50"
  | "white-50";

export type ExtraColors =
  | "blue"
  | "azure"
  | "indigo"
  | "purple"
  | "pink"
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "cyan";

export type LightColors = `${ExtraColors}-lt`;

export type SocialColors =
  | "facebook"
  | "twitter"
  | "google"
  | "youtube"
  | "vimeo"
  | "dribble"
  | "github"
  | "instagram"
  | "pinterest"
  | "vk"
  | "rss"
  | "flickr"
  | "bitbucket"
  | "tabler";

export type Colors = StandardColors | ExtraColors | SocialColors;

export const standardColors: StandardColors[] = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
];

export const additionalColors = [
  "light",
  "dark",
  "body",
  "muted",
  "reset",
  "black-50",
  "white-50",
];

export const extraColors: ExtraColors[] = [
  "blue",
  "azure",
  "indigo",
  "purple",
  "pink",
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
];

export const lightColors: LightColors[] = [
  "blue-lt",
  "azure-lt",
  "indigo-lt",
  "purple-lt",
  "pink-lt",
  "red-lt",
  "orange-lt",
  "yellow-lt",
  "lime-lt",
  "green-lt",
  "teal-lt",
  "cyan-lt",
];

export const socialColors: SocialColors[] = [
  "facebook",
  "twitter",
  "google",
  "youtube",
  "vimeo",
  "dribble",
  "github",
  "instagram",
  "pinterest",
  "vk",
  "rss",
  "flickr",
  "bitbucket",
  "tabler",
];
export const colors = [...standardColors, ...extraColors, ...socialColors];

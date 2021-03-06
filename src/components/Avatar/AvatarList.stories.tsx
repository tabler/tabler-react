import * as React from "react";

import { storiesOf } from "@storybook/react";

import Avatar from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Avatar/AvatarList", module);

stories.add("Basic", () => {
  return (
    <Avatar.List>
      <Avatar imageURL="/demo/faces/male/9.jpg" />
      <Avatar imageURL="/demo/faces/female/8.jpg" />
      <Avatar imageURL="/demo/faces/male/4.jpg" />
    </Avatar.List>
  );
});

stories.add("Stacked List", () => {
  return (
    <Avatar.List stacked>
      <Avatar imageURL="/demo/faces/male/9.jpg" />
      <Avatar imageURL="/demo/faces/female/8.jpg" />
      <Avatar imageURL="/demo/faces/male/4.jpg" />
      <Avatar>+8</Avatar>
    </Avatar.List>
  );
});

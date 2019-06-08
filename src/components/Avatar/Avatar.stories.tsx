import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Avatar from ".";
import examples from "./Avatar.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Avatar/Avatar", module);

stories.addDecorator(withKnobs);

stories.add(
  "Basic",
  () => {
    return <Avatar imageURL="./demo/faces/male/21.jpg" />;
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("As Icon", () => {
  return <Avatar icon="users" />;
});

stories.add("Size", () => {
  return (
    <Avatar.List>
      <Avatar size="sm" imageURL="/demo/faces/male/9.jpg" />
      <Avatar imageURL="/demo/faces/female/8.jpg" />
      <Avatar size="md" imageURL="/demo/faces/male/4.jpg" />
      <Avatar size="lg" imageURL="/demo/faces/male/35.jpg" />
      <Avatar size="xl" imageURL="/demo/faces/female/29.jpg" />
      <Avatar size="xxl" imageURL="/demo/faces/male/2.jpg" />
    </Avatar.List>
  );
});

stories.add("Status Indicator", () => {
  return (
    <Avatar.List>
      <Avatar imageURL="/demo/faces/male/9.jpg" />
      <Avatar status="grey" imageURL="/demo/faces/female/8.jpg" />
      <Avatar status="red" imageURL="/demo/faces/male/4.jpg" />
      <Avatar status="yellow" imageURL="/demo/faces/male/35.jpg" />
      <Avatar status="green" imageURL="/demo/faces/female/29.jpg" />
    </Avatar.List>
  );
});

stories.add("Placeholder", () => {
  return (
    <Avatar.List>
      <Avatar>RB</Avatar>
      <Avatar>KH</Avatar>
      <Avatar>BK</Avatar>
      <Avatar placeholder />
    </Avatar.List>
  );
});

stories.add("Placeholder Colour", () => {
  return (
    <Avatar.List>
      <Avatar color="blue">NG</Avatar>
      <Avatar color="azure">AM</Avatar>
      <Avatar color="indigo">RB</Avatar>
      <Avatar color="purple">PR</Avatar>
      <Avatar color="pink">WH</Avatar>
      <Avatar color="red">MR</Avatar>
      <Avatar color="orange">DB</Avatar>
      <Avatar color="yellow">PP</Avatar>
      <Avatar color="lime">JR</Avatar>
      <Avatar color="green">RB</Avatar>
      <Avatar color="teal">KH</Avatar>
      <Avatar color="cyan">BK</Avatar>
      <Avatar color="gray">CA</Avatar>
      <Avatar color="gray-dark">CW</Avatar>
    </Avatar.List>
  );
});

import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Tag from ".";
import examples from "./Tag.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Tag/Tag", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return <Tag>A Rag</Tag>;
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Link", () => {
  return (
    <Tag link href="">
      A Tag
    </Tag>
  );
});

stories.add("Rounded", () => {
  return <Tag rounded>A Tag</Tag>;
});

stories.add("Colour", () => {
  return <Tag color="blue">A Tag</Tag>;
});

stories.add("Avatar", () => {
  return <Tag avatar="/demo/faces/female/16.jpg">A Tag</Tag>;
});

stories.add("Remove", () => {
  return <Tag remove>A Tag</Tag>;
});

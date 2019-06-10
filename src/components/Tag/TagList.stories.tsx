import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Tag from ".";
import examples from "./TagList.examples.md";
import Icon from "../Icon";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Tag/TagList", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Tag.List>
        <Tag>First tag</Tag>
        <Tag>Second tag</Tag>
        <Tag>Third tag</Tag>
      </Tag.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

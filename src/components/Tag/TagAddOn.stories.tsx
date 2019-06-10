import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Tag from ".";
import examples from "./TagAddOn.examples.md";
import Icon from "../Icon";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Tag/TagAddOn", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Tag.List>
        <Tag addOn={<Icon name="user" />}>A User</Tag>
        <Tag color="danger" addOnIcon="activity">
          NPM
        </Tag>
        <Tag addOn="passing" addOnColor="success">
          tests
        </Tag>
        <Tag color="dark" addOn="1kb" addOnColor="warning">
          CSS gzip size
        </Tag>
      </Tag.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

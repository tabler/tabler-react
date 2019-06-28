import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Tooltip from ".";
import examples from "./Tooltip.examples.md";
import Tag from "../Tag";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Tooltip/Tooltip", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Tooltip content="Tooltip" placement="bottom">
        <Tag>Hover Me!</Tag>
      </Tooltip>
    );
  },
  {
    notes: { markdown: examples },
  }
);

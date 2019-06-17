import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Divider from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Divider/Divider", module);

stories.addDecorator(withKnobs);

stories.add("Example", () => {
  return <Divider>OR</Divider>;
});

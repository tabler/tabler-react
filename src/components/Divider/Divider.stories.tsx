import React from "react";

import { storiesOf } from "@storybook/react";

import Divider from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Divider/Divider", module);

stories.add("Example", () => {
  return <Divider>OR</Divider>;
});

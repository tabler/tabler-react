import * as React from "react";

import { storiesOf } from "@storybook/react";

import Site from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Site", module);

stories.add("SiteNav", () => {
  return <Site.Nav />;
});

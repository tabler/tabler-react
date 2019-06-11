import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Site from ".";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Site", module);

stories.addDecorator(withKnobs);

stories.add("SiteHeader", () => {
  return <Site.Header />;
});

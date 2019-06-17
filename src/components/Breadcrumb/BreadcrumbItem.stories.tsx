import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Breadcrumb from "./";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Breadcrumb/BreadcrumbItem", module);

stories.addDecorator(withKnobs);

stories.add("Example", () => {
  return <Breadcrumb.Item>A Breadcrumb.Item</Breadcrumb.Item>;
});

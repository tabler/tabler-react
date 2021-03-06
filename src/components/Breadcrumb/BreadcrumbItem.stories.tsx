import React from "react";

import { storiesOf } from "@storybook/react";

import Breadcrumb from "./";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Breadcrumb/BreadcrumbItem", module);

stories.add("Example", () => {
  return <Breadcrumb.Item>A Breadcrumb.Item</Breadcrumb.Item>;
});

import React from "react";

import { storiesOf } from "@storybook/react";

import Breadcrumb from "./";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Breadcrumb/Breadcrumb", module);

stories.add("Example", () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
});

stories.add("Variations: Dots", () => {
  return (
    <Breadcrumb separator="dot">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
});

stories.add("Variations: Arrows", () => {
  return (
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Library</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
});

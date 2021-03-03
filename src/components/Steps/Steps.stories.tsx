import React from "react";

import { storiesOf } from "@storybook/react";

import Steps from "./";
import examples from "./Steps.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Steps/Steps", module);

stories.add(
  "Example",
  () => {
    return (
      <Steps>
        <Steps.Step>Step 1</Steps.Step>
        <Steps.Step>Step 2</Steps.Step>
        <Steps.Step active>Step 3</Steps.Step>
        <Steps.Step>Step 4</Steps.Step>
      </Steps>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Tooltip", () => {
  return (
    <Steps>
      <Steps.Step tooltip="Step 1">Step 1</Steps.Step>
      <Steps.Step>Step 2</Steps.Step>
      <Steps.Step active>Step 3</Steps.Step>
      <Steps.Step>Step 4</Steps.Step>
    </Steps>
  );
});

stories.add("With Numbers", () => {
  return (
    <Steps counter>
      <Steps.Step tooltip="Step 1">Step 1</Steps.Step>
      <Steps.Step>Step 2</Steps.Step>
      <Steps.Step active>Step 3</Steps.Step>
      <Steps.Step>Step 4</Steps.Step>
    </Steps>
  );
});

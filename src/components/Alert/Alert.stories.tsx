import * as React from "react";

import { storiesOf } from "@storybook/react";

import Alert from ".";
import examples from "./Alert.examples.md";
import Header from "../Header";
import { Button } from "..";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Alert/Alert", module);

stories.add(
  "Basic",
  () => {
    return (
      <Alert type="primary">
        <strong>Work in progress!</strong> More detailed documentation is coming
        soon.
      </Alert>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Types", () => {
  return (
    <React.Fragment>
      <Alert type="primary">
        This is a <strong>primary</strong> alert—check it out!
      </Alert>
      <Alert type="secondary">
        This is a <strong>secondary</strong> alert—check it out!
      </Alert>
      <Alert type="success">
        This is a <strong>success</strong> alert—check it out!
      </Alert>
      <Alert type="info">
        This is a <strong>info</strong> alert—check it out!
      </Alert>
      <Alert type="warn">
        This is a <strong>warning</strong> alert—check it out!
      </Alert>
      <Alert type="danger">
        This is a <strong>danger</strong> alert—check it out!
      </Alert>
    </React.Fragment>
  );
});

stories.add("With Icons", () => {
  return (
    <React.Fragment>
      <Alert type="primary" icon="bell">
        You have done 5 actions.
      </Alert>
      <Alert type="success" icon="check">
        The page has been added.
      </Alert>
      <Alert type="danger" icon="alert-triangle">
        The daily report has failed. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Alert>
    </React.Fragment>
  );
});

stories.add("Dismissable", () => {
  return (
    <Alert type="warn" isDismissible>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </Alert>
  );
});

stories.add("With Avatar", () => {
  return (
    <Alert type="primary" avatar="./demo/faces/male/4.jpg">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
      consectetur adipisicing elit.
    </Alert>
  );
});

stories.add("With Buttons", () => {
  return (
    <Alert type="primary" isDismissible>
      <Header.H4>Some Message</Header.H4>
      <p>
        Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id
        dolore minim voluptate.
      </p>
      <Button.List>
        <Button color="success" as="button">
          Okay
        </Button>
        <Button color="secondary" as="button">
          No, thanks
        </Button>
      </Button.List>
    </Alert>
  );
});

stories.add("With extra space", () => {
  return (
    <React.Fragment>
      <span>Content Above</span>
      <Alert type="primary" hasExtraSpace>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Alert>
      <span>Content Below</span>
    </React.Fragment>
  );
});

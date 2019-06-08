import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from ".";
import examples from "./ButtonList.examples.md";
import { Dropdown } from "..";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Button/ButtonList", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Button.List>
        <Button color="success">Save changes</Button>
        <Button color="secondary">Save and continue</Button>
        <Button color="danger">Cancel</Button>
      </Button.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Wrapping", () => {
  return (
    <div style={{ width: 300 }}>
      <Button.List>
        <Button color="secondary">One</Button>
        <Button color="secondary">Two</Button>
        <Button color="secondary">Three</Button>
        <Button color="secondary">Four</Button>
        <Button color="secondary">Five</Button>
        <Button color="secondary">Six</Button>
        <Button color="secondary">Seven</Button>
        <Button color="secondary">Eight</Button>
        <Button color="secondary">Nine</Button>
        <Button color="secondary">Ten</Button>
        <Button color="secondary">Eleven</Button>
        <Button color="secondary">Twelve</Button>
        <Button color="secondary">Thirteen</Button>
        <Button color="secondary">Fourteen</Button>
        <Button color="secondary">Fifteen</Button>
        <Button color="secondary">Sixteen</Button>
        <Button color="secondary">Seventeen</Button>
        <Button color="secondary">Eighteen</Button>
        <Button color="secondary">Nineteen</Button>
      </Button.List>
    </div>
  );
});

stories.add("Alignment", () => {
  return (
    <React.Fragment>
      <Button.List align="center">
        <Button color="primary">Align</Button>
        <Button color="secondary">Center</Button>
      </Button.List>
      <Button.List align="right">
        <Button color="primary">Align</Button>
        <Button color="secondary">Right</Button>
      </Button.List>
    </React.Fragment>
  );
});

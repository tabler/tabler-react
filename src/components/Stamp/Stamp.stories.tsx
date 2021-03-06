import * as React from "react";

import { storiesOf } from "@storybook/react";

import Stamp from ".";
import examples from "./Stamp.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Stamp/Stamp", module);

stories.add(
  "Example",
  () => {
    return (
      <React.Fragment>
        <Stamp size="sm" className="mr-1">
          A
        </Stamp>
        <Stamp className="mr-1">B</Stamp>
        <Stamp color="primary" className="mr-1">
          C
        </Stamp>
        <Stamp color="orange" icon="globe" />
      </React.Fragment>
    );
  },
  {
    notes: { markdown: examples },
  }
);

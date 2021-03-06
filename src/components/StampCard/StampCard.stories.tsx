import * as React from "react";

import { storiesOf } from "@storybook/react";

import StampCard from ".";
import examples from "./StampCard.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/StampCard", module);

stories.add(
  "Example",
  () => {
    return (
      <React.Fragment>
        <StampCard header="Headline" footer="Something Else" color="yellow" />
        <StampCard icon="check" color="green">
          Success!
        </StampCard>
      </React.Fragment>
    );
  },
  {
    notes: { markdown: examples },
  }
);

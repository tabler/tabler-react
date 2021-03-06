import * as React from "react";

import { storiesOf } from "@storybook/react";

import StoreCard from ".";
import examples from "./StoreCard.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/StoreCard", module);

stories.add(
  "Example",
  () => {
    return (
      <StoreCard
        title=""
        subtitle=""
        price=""
        imgUrl="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
        imgAlt="iPhone"
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);

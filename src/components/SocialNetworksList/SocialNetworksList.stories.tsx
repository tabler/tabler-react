import * as React from "react";

import { storiesOf } from "@storybook/react";

import SocialNetworksList from ".";
import examples from "./SocialNetworksList.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("SocialNetworksList/SocialNetworksList", module);

stories.add(
  "Example",
  () => {
    return (
      <SocialNetworksList
        itemsObjects={[
          { name: "twitter", to: "http://www.twitter.com" },
          { name: "linkedin", to: "http://www.linkedin.com" },
        ]}
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("As Buttons", () => {
  return (
    <SocialNetworksList
      itemsObjects={[
        { name: "twitter", label: "Follow", to: "http://www.twitter.com" },
        {
          name: "linkedin",
          label: "Connect",
          color: "blue",
          to: "http://www.linkedin.com",
        },
      ]}
      prefix="fa"
      asButtons
    />
  );
});

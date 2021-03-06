import * as React from "react";

import { storiesOf } from "@storybook/react";

import BlogCard from ".";
import examples from "./BlogCard.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Card/BlogCard", module);

stories.add(
  "Example",
  () => {
    return (
      <BlogCard
        title="And this isn't my nose. This is a false one."
        postHref="http://www.example.com"
        description="Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr..."
        avatarImgSrc="https://tabler.github.io/tabler/demo/faces/female/18.jpg"
        authorName="Rose Bradley"
        profileHref="/profile.html"
        date="3 days ago"
        imgSrc="https://tabler.github.io/tabler/demo/photos/david-klaasen-54203-500.jpg"
        imgAlt="Penguin"
        iconName="heart"
        iconHref="#"
      />
    );
  },
  {
    notes: { markdown: examples },
  }
);

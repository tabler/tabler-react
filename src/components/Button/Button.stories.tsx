import * as React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from ".";
import examples from "./Button.examples.md";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Button/Button", module);

stories.addDecorator(withKnobs);

stories.add(
  "Example",
  () => {
    return (
      <Button.List>
        <Button color="primary">Button</Button>
        <Button color="primary" RootComponent="a" href="#">
          Link
        </Button>
      </Button.List>
    );
  },
  {
    notes: { markdown: examples },
  }
);

stories.add("Link Button", () => {
  return <Button link>Link</Button>;
});

stories.add("Disabled", () => {
  return (
    <Button.List>
      <Button color="primary" disabled>
        Button
      </Button>
      <Button color="success" disabled RootComponent="a" href="#">
        Link
      </Button>
      <Button color="info" disabled as="input" type="button" value="Input" />
    </Button.List>
  );
});

stories.add("Colours", () => {
  return (
    <Button.List>
      <Button color="blue">Blue</Button>
      <Button color="azure">Azure</Button>
      <Button color="indigo">Indigo</Button>
      <Button color="purple">Purple</Button>
      <Button color="pink">Pink</Button>
      <Button color="red">Red</Button>
      <Button color="orange">Orange</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="lime">Lime</Button>
      <Button color="green">Green</Button>
      <Button color="teal">Teal</Button>
      <Button color="cyan">Cyan</Button>
      <Button color="gray">Gray</Button>
      <Button color="gray-dark">Dark gray</Button>
    </Button.List>
  );
});

stories.add("Square", () => {
  return (
    <Button.List>
      <Button square color="primary">
        color='primary'
      </Button>
      <Button square color="secondary">
        color='secondary'
      </Button>
      <Button square color="success">
        color='success'
      </Button>
      <Button square color="info">
        color='info'
      </Button>
      <Button square color="warning">
        color='warning'
      </Button>
      <Button square color="danger">
        color='danger'
      </Button>
    </Button.List>
  );
});

stories.add("Pills", () => {
  return (
    <Button.List>
      <Button pill color="primary">
        color='primary'
      </Button>
      <Button pill color="secondary">
        color='secondary'
      </Button>
      <Button pill color="success">
        color='success'
      </Button>
      <Button pill color="info">
        color='info'
      </Button>
      <Button pill color="warning">
        color='warning'
      </Button>
      <Button pill color="danger">
        color='danger'
      </Button>
    </Button.List>
  );
});

stories.add("Outline", () => {
  return (
    <Button.List>
      <Button outline color="primary">
        color='primary'
      </Button>
      <Button outline color="secondary">
        color='secondary'
      </Button>
      <Button outline color="success">
        color='success'
      </Button>
      <Button outline color="info">
        color='info'
      </Button>
      <Button outline color="warning">
        color='warning'
      </Button>
      <Button outline color="danger">
        color='danger'
      </Button>
    </Button.List>
  );
});

stories.add("Size", () => {
  return (
    <Button.List>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Button</Button>
    </Button.List>
  );
});

stories.add("Block Level", () => {
  return (
    <Button.List>
      <Button block color="primary">
        Block level button
      </Button>
      <Button block color="secondary">
        Block level button
      </Button>
    </Button.List>
  );
});

stories.add("Icons", () => {
  return (
    <Button.List>
      <Button color="blue" icon="upload">
        Upload
      </Button>
      <Button icon="heart" color="warning">
        I Like
      </Button>
      <Button icon="check" color="success">
        I agree
      </Button>
      <Button icon="plus" color="primary" outline>
        More
      </Button>
      <Button icon="link" color="danger">
        Link
      </Button>
      <Button icon="message-circle" color="info">
        Comment
      </Button>
    </Button.List>
  );
});

stories.add("Social", () => {
  return (
    <Button.List>
      <Button social="facebook">Facebook</Button>
      <Button social="twitter">Twitter</Button>
      <Button social="google">Google</Button>
      <Button social="youtube">Youtube</Button>
      <Button social="vimeo">Vimeo</Button>
      <Button social="dribbble">Dribbble</Button>
      <Button social="github">Github</Button>
      <Button social="instagram">Instagram</Button>
      <Button social="pinterest">Pinterest</Button>
      <Button social="vk">VKontakte</Button>
      <Button social="rss">RSS</Button>
      <Button social="flickr">Flickr</Button>
      <Button social="bitbucket">Bitbucket</Button>
    </Button.List>
  );
});

stories.add("Loading", () => {
  return (
    <Button.List>
      <Button loading color="primary">
        Button text
      </Button>
      <Button loading color="success" icon="check" />
      <Button loading color="warning" size="sm">
        Button text
      </Button>
      <Button loading color="danger" size="lg">
        Button text
      </Button>
      <Button loading color="secondary" block>
        Button text
      </Button>
    </Button.List>
  );
});

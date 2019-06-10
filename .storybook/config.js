import { configure, addDecorator } from "@storybook/react";
import "@storybook/addon-console";
import { withInfo } from "@storybook/addon-info";

import "../src/tabler.scss";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.{js|ts|tsx}$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

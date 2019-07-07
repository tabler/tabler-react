import { configure } from "@storybook/react";
import "@storybook/addon-console";
import requireContext from "require-context.macro";

import "../src/tabler.scss";

// automatically import all files ending in *.stories.js
const req = requireContext("../src", true, /\.stories\.{js|ts|tsx}$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

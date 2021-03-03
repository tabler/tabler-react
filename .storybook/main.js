// const { propKeys } = require("../dist");

module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: false, // type-check stories during Storybook build
    reactDocgenTypescriptOptions: {
      propFilter: prop => {
        // if (propKeys.includes(prop.name)) {
        //   return false;
        // }
        return prop.parent ? !/node_modules/.test(prop.parent.fileName) : true;
      },
    },
  },
};

module.exports = {
  components: "src/components/**/*.react.{js,jsx}",
  webpackConfig: require("./example/node_modules/react-scripts/config/webpack.config.dev.js"),
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.react.js?$/, ".examples.md");
  },
  require: ["./src/Tabler.css"],
  styleguideDir: "./example/public/documentation",
  sections: [
    {
      name: "Introduction",
      content: "docs/Introduction.md",
    },
    {
      name: "Styles",
      content: "docs/Styles.md",
    },
    {
      name: "RTL",
      content: "docs/RTL.md",
    },
    {
      name: "Components",
      sections: [
        {
          name: "Account Dropdown",
          components: "src/components/AccountDropdown/**/*.react.{js,jsx}",
        },
        {
          name: "Alert",
          components: "src/components/Alert/**/*.react.{js,jsx}",
        },
        {
          name: "Avatar",
          components: "src/components/Avatar/**/*.react.{js,jsx}",
        },
        {
          name: "Badge",
          components: "src/components/Badge/**/*.react.{js,jsx}",
        },
        {
          name: "Button",
          components: "src/components/Button/**/*.react.{js,jsx}",
        },
        {
          name: "Card",
          components: "src/components/Card/**/*.react.{js,jsx}",
        },
        {
          name: "ContactCard",
          components: "src/components/ContactCard/**/*.react.{js,jsx}",
        },
        {
          name: "Container",
          components: "src/components/Container.react.{js,jsx}",
        },
        {
          name: "Dimmer",
          components: "src/components/Dimmer/**/*.react.{js,jsx}",
        },
        {
          name: "Dropdown",
          components: "src/components/Dropdown/**/*.react.{js,jsx}",
        },
        {
          name: "Form",
          components: "src/components/Form/**/*.react.{js,jsx}",
        },
        {
          name: "GalleryCard",
          components: "src/components/GalleryCard/**/*.react.{js,jsx}",
        },
        {
          name: "Grid",
          components: "src/components/Grid/**/*.react.{js,jsx}",
        },
        {
          name: "Header",
          components: "src/components/Header/**/*.react.{js,jsx}",
        },
        {
          name: "Icon",
          components: "src/components/Icon/**/*.react.{js,jsx}",
        },
        {
          name: "List",
          components: "src/components/List/**/*.react.{js,jsx}",
        },
        {
          name: "Loader",
          components: "src/components/Loader/**/*.react.{js,jsx}",
        },
        {
          name: "Media",
          components: "src/components/Media/**/*.react.{js,jsx}",
        },
        {
          name: "Nav",
          components: "src/components/Nav/**/*.react.{js,jsx}",
        },
        {
          name: "Notification",
          components: "src/components/Notification/**/*.react.{js,jsx}",
        },
        {
          name: "Page",
          components: "src/components/Page/**/*.react.{js,jsx}",
        },
        {
          name: "Pricing Card",
          components: "src/components/PricingCard/**/*.react.{js,jsx}",
        },
        {
          name: "Profile",
          components: "src/components/Profile/**/*.react.{js,jsx}",
        },
        {
          name: "Progress",
          components: "src/components/Progress/**/*.react.{js,jsx}",
        },
        {
          name: "ProgressCard",
          components: "src/components/ProgressCard/**/*.react.{js,jsx}",
        },
        {
          name: "Site",
          components: "src/components/Site/**/*.react.{js,jsx}",
        },
        {
          name: "Stamp",
          components: "src/components/Stamp/**/*.react.{js,jsx}",
        },
        {
          name: "StampCard",
          components: "src/components/StampCard/**/*.react.{js,jsx}",
        },
        {
          name: "StatsCard",
          components: "src/components/StatsCard/**/*.react.{js,jsx}",
        },
        {
          name: "StoreCard",
          components: "src/components/StoreCard/**/*.react.{js,jsx}",
        },
        {
          name: "TabbedCard",
          components: "src/components/TabbedCard/**/*.react.{js,jsx}",
        },
        {
          name: "Table",
          components: "src/components/Table/**/*.react.{js,jsx}",
        },
        {
          name: "Tag",
          components: "src/components/Tag/**/*.react.{js,jsx}",
        },
        {
          name: "Text",
          components: "src/components/Text/**/*.react.{js,jsx}",
        },
      ],
    },
  ],
};

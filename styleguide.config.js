const path = require("path");
const ariaAttributes = require("aria-attributes");

module.exports = {
  components: "src/**/*.{tsx,ts,js}",
  ignore: ["**/*.stories.*", "**/Code/*", "**/index.ts"],
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
    {
      propFilter: {
        // skipPropsWithoutDoc: true,
        skipPropsWithName: ariaAttributes,
      },
    }
  ).parse,
  webpackConfig: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.(ts|tsx|jsx|js)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        // Other loaders that are needed for your components
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },

        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "static/fonts",
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[id].[ext]",
                outputPath: "static/media",
              },
            },
          ],
        },
      ],
    },
  },
  moduleAliases: {
    "tabler-react": path.resolve(__dirname, "src"),
  },
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.tsx?$/, ".examples.md");
  },
  require: ["./src/tabler.scss"],
  styleguideDir: "./example/public/documentation",
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base:
        '"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    },
  },
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
          components: "src/components/AccountDropdown/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Alert",
          components: "src/components/Alert/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Avatar",
          components: "src/components/Avatar/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Badge",
          components: "src/components/Badge/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "BlogCard",
          components: "src/components/BlogCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Button",
          components: "src/components/Button/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Card",
          components: "src/components/Card/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "ContactCard",
          components: "src/components/ContactCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Container",
          components: "src/components/Container.{js,jsx,ts,tsx}",
        },
        {
          name: "Dimmer",
          components: "src/components/Dimmer/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Dropdown",
          components: "src/components/Dropdown/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Form",
          components: "src/components/Form/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "GalleryCard",
          components: "src/components/GalleryCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Grid",
          components: "src/components/Grid/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Header",
          components: "src/components/Header/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Icon",
          components: "src/components/Icon/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "List",
          components: "src/components/List/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Loader",
          components: "src/components/Loader/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Media",
          components: "src/components/Media/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Nav",
          components: "src/components/Nav/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Notification",
          components: "src/components/Notification/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Page",
          components: "src/components/Page/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Pricing Card",
          components: "src/components/PricingCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Profile",
          components: "src/components/Profile/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Progress Indicator",
          components: "src/components/Progress/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Progress Card",
          components: "src/components/ProgressCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Social Networks List",
          components: "src/components/SocialNetworksList/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Site",
          components: "src/components/Site/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Stamp",
          components: "src/components/Stamp/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "StampCard",
          components: "src/components/StampCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "StatsCard",
          components: "src/components/StatsCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "StoreCard",
          components: "src/components/StoreCard/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "TabbedCard",
          components: "src/components/{TabbedCard,Tabs}/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Table",
          components: "src/components/Table/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Tag",
          components: "src/components/Tag/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Text",
          components: "src/components/Text/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Tooltip",
          components: "src/components/Tooltip/**/*.{js,jsx,ts,tsx}",
        },
      ],
    },
    {
      name: "Page Templates",
      sections: [
        {
          name: "Login Page",
          components:
            "src/page_templates/account/LoginPage/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Register Page",
          components:
            "src/page_templates/account/RegisterPage/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Forgot Password Page",
          components:
            "src/page_templates/account/ForgotPasswordPage/**/*.{js,jsx,ts,tsx}",
        },
        {
          name: "Errors",
          components: "src/page_templates/errors/**/*.{js,jsx,ts,tsx}",
        },
      ],
    },
  ],
};

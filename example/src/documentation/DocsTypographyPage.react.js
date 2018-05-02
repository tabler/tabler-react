// @flow

import * as React from "react";

import { Header, Text } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsTypographyPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Typeography</Header.H2>
      <p>Documentation and examples for display text.</p>

      <Header.H3>Text Alignment</Header.H3>
      <p>Easily realign text to components with text alignment classes.</p>

      <ComponentDemo>
        <React.Fragment>
          <Text left>Left aligned text on all viewport sizes.</Text>
          <Text center>Center aligned text on all viewport sizes.</Text>
          <Text right>Right aligned text on all viewport sizes.</Text>
          <Text justify>
            Both aligned text on all viewport sizes. Ambitioni dedisse
            scripsisse iudicaretur. Cras mattis iudicium purus sit amet
            fermentum. Donec sed odio operae, eu vulputate felis rhoncus.
          </Text>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Text Transform</Header.H3>
      <p>Transform text in components with text capitalization classes.</p>

      <ComponentDemo>
        <React.Fragment>
          <Text lowercase>lowercased text.</Text>
          <Text uppercase>Uppercased text.</Text>
          <Text capitalize>Capitalized text.</Text>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Text Spacing</Header.H3>
      <p>Props for controlling the tracking (letter spacing).</p>

      <ComponentDemo>
        <React.Fragment>
          <Text trackingTight>
            Lorem ipsum dolor sit amet. Tight letter spacing.
          </Text>
          <Text trackingNormal>
            Lorem ipsum dolor sit amet. Normal letter spacing.
          </Text>
          <Text trackingWide>
            Lorem ipsum dolor sit amet. Wide letter spacing.
          </Text>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Line Height</Header.H3>
      <p>Props for controlling the leading (line height).</p>

      <ComponentDemo>
        <React.Fragment>
          <Text leadingNone>
            Lorem ipsum dolor sit amet.<br />Dolor sit amet.
          </Text>
          <Text leadingTight>
            Lorem ipsum dolor sit amet.<br />Dolor sit amet.
          </Text>
          <Text leadingNormal>
            Lorem ipsum dolor sit amet.<br />Dolor sit amet.
          </Text>
          <Text leadingLoose>
            Lorem ipsum dolor sit amet.<br />Dolor sit amet.
          </Text>
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsTypographyPage;

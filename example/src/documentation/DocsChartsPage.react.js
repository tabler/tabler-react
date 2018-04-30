// @flow

import * as React from "react";

import { Header, Card, colors } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";
import C3Chart from "react-c3js";

function DocsChartsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Charts</Header.H2>

      <Header.H3>c3.js charts with react-c3js</Header.H3>

      <ComponentDemo>
        <Card title="Chart name">
          <Card.Body>
            <C3Chart
              data={{
                columns: [
                  // each columns data
                  [
                    "data1",
                    7.0,
                    6.9,
                    9.5,
                    14.5,
                    18.4,
                    21.5,
                    25.2,
                    26.5,
                    23.3,
                    18.3,
                    13.9,
                    9.6,
                  ],
                  [
                    "data2",
                    3.9,
                    4.2,
                    5.7,
                    8.5,
                    11.9,
                    15.2,
                    17.0,
                    16.6,
                    14.2,
                    10.3,
                    6.6,
                    4.8,
                  ],
                ],
                labels: true,
                type: "line", // default type of chart
                colors: {
                  data1: colors["blue"],
                  data2: colors["green"],
                },
                names: {
                  // name of each serie
                  data1: "Tokyo",
                  data2: "London",
                },
              }}
              axis={{
                x: {
                  type: "category",
                  // name of each category
                  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
              }}
              legend={{
                show: false, //hide legend
              }}
              padding={{
                bottom: 0,
                top: 0,
              }}
            />
          </Card.Body>
        </Card>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsChartsPage;

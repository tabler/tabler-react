// @flow

import * as React from "react";

import { Page, Grid, Card, Button, Form } from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../SiteWrapper.react";

function ChartsPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row>
          <Grid.Col md={6} xl={4}>
            <Card title="Employment Growth">
              <Card.Body>
                <C3Chart
                  data={{
                    columns: [
                      // each columns data
                      ["data1", 2, 8, 6, 7, 14, 11],
                      ["data2", 5, 15, 11, 15, 21, 25],
                      ["data3", 17, 18, 21, 20, 30, 29],
                    ],
                    type: "line", // default type of chart
                    colors: {
                      data1: "orange",
                      data2: "blue",
                      data3: "green",
                    },
                    names: {
                      // name of each serie
                      data1: "Development",
                      data2: "Marketing",
                      data3: "Sales",
                    },
                  }}
                  axis={{
                    x: {
                      type: "category",
                      // name of each category
                      categories: [
                        "2013",
                        "2014",
                        "2015",
                        "2016",
                        "2017",
                        "2018",
                      ],
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
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default ChartsPage;

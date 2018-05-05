// @flow

import * as React from "react";

import { Header, Grid, Card } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

const DivWithBorder = props => (
  <div
    style={{
      width: "100%",
      height: "100%",
      border: "1px grey solid",
    }}
  >
    {props.children}
  </div>
);

function DocsGridPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Grids</Header.H2>

      <Header.H3>Basic Grid</Header.H3>
      <ComponentDemo>
        <Grid.Row>
          <Grid.Col>A</Grid.Col>
          <Grid.Col>B</Grid.Col>
          <Grid.Col>C</Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Row Gutters</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Grid.Row gutters="xs">
            <Grid.Col>
              <DivWithBorder>A</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>B</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>C</DivWithBorder>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutters="sm">
            <Grid.Col>
              <DivWithBorder>A</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>B</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>C</DivWithBorder>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutters="md">
            <Grid.Col>
              <DivWithBorder>A</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>B</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>C</DivWithBorder>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row gutters="lg">
            <Grid.Col>
              <DivWithBorder>A</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>B</DivWithBorder>
            </Grid.Col>
            <Grid.Col>
              <DivWithBorder>C</DivWithBorder>
            </Grid.Col>
          </Grid.Row>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Rows of Cards</Header.H3>
      <ComponentDemo>
        <React.Fragment>
          <Grid.Row cards>
            <Grid.Col>
              <Card title="Title" body="A" />
            </Grid.Col>
            <Grid.Col>
              <Card
                title="Title"
                body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            deleniti fugit incidunt."
              />
            </Grid.Col>
            <Grid.Col>
              <Card title="Title" body="C" />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row cards deck>
            <Grid.Col>
              <Card title="Title" body="A" />
            </Grid.Col>
            <Grid.Col>
              <Card
                title="Title"
                body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
              deleniti fugit incidunt."
              />
            </Grid.Col>
            <Grid.Col>
              <Card title="Title" body="C" />
            </Grid.Col>
          </Grid.Row>
        </React.Fragment>
      </ComponentDemo>

      <Header.H3>Row Alignment</Header.H3>
      <ComponentDemo>
        <Grid.Row cards alignItems="center">
          <Grid.Col>
            <Card title="Title" body="A" />
          </Grid.Col>
          <Grid.Col>
            <Card
              title="Title"
              body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          deleniti fugit incidunt."
            />
          </Grid.Col>
          <Grid.Col>
            <Card title="Title" body="C" />
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Columns</Header.H3>
      <ComponentDemo>
        <Grid.Row>
          <Grid.Col>1</Grid.Col>
          <Grid.Col>2</Grid.Col>
          <Grid.Col>3</Grid.Col>
          <Grid.Col>4</Grid.Col>
          <Grid.Col>5</Grid.Col>
          <Grid.Col>6</Grid.Col>
          <Grid.Col>7</Grid.Col>
          <Grid.Col>8</Grid.Col>
          <Grid.Col>9</Grid.Col>
          <Grid.Col>10</Grid.Col>
          <Grid.Col>11</Grid.Col>
          <Grid.Col>12</Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Column Width</Header.H3>
      <ComponentDemo>
        <Grid.Row>
          <Grid.Col width={2}>1</Grid.Col>
          <Grid.Col width={4}>2</Grid.Col>
          <Grid.Col width={6}>3</Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Responsive Column Width</Header.H3>
      <ComponentDemo>
        <Grid.Row>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            1
          </Grid.Col>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            2
          </Grid.Col>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            3
          </Grid.Col>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            4
          </Grid.Col>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            5
          </Grid.Col>
          <Grid.Col xl={2} lg={4} md={6} sm={12}>
            6
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}

export default DocsGridPage;

// @flow

import * as React from "react";

import { Header, Button, Grid } from "tabler-react";
import ComponentDemo from "../ComponentDemo";
import { DocsPageWrapper } from "./";

function DocsColorsPage(): React.Node {
  return (
    <DocsPageWrapper>
      <Header.H2>Colors className prop</Header.H2>

      <Header.H3>Contextual colors</Header.H3>
      <p>
        A background fill can be applied to a container using one of the
        .bg-[color] classes.
      </p>
      <ComponentDemo>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-primary rounded mr-4" />
          <div>
            <strong>Primary</strong>
            <br />
            <code>.bg-primary</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-secondary rounded mr-4" />
          <div>
            <strong>Secondary</strong>
            <br />
            <code>.bg-secondary</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-success rounded mr-4" />
          <div>
            <strong>Success</strong>
            <br />
            <code>.bg-success</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-info rounded mr-4" />
          <div>
            <strong>Info</strong>
            <br />
            <code>.bg-info</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-warning rounded mr-4" />
          <div>
            <strong>Warning</strong>
            <br />
            <code>.bg-warning</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-danger rounded mr-4" />
          <div>
            <strong>Danger</strong>
            <br />
            <code>.bg-danger</code>
          </div>
        </div>
      </ComponentDemo>

      <Header.H3>Other colors</Header.H3>
      <p>
        Instead of using contextual classes you can use ordinary color names.
      </p>
      <ComponentDemo>
        <Grid.Row>
          <Grid.Col width={4}>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-blue rounded mr-4" />
              <div>
                <strong>Blue</strong>
                <br />
                <code>.bg-blue</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-azure rounded mr-4" />
              <div>
                <strong>Azure</strong>
                <br />
                <code>.bg-azure</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-indigo rounded mr-4" />
              <div>
                <strong>Indigo</strong>
                <br />
                <code>.bg-indigo</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-purple rounded mr-4" />
              <div>
                <strong>Purple</strong>
                <br />
                <code>.bg-purple</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-pink rounded mr-4" />
              <div>
                <strong>Pink</strong>
                <br />
                <code>.bg-pink</code>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col width={4}>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-red rounded mr-4" />
              <div>
                <strong>Red</strong>
                <br />
                <code>.bg-red</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-orange rounded mr-4" />
              <div>
                <strong>Orange</strong>
                <br />
                <code>.bg-orange</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-yellow rounded mr-4" />
              <div>
                <strong>Yellow</strong>
                <br />
                <code>.bg-yellow</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-lime rounded mr-4" />
              <div>
                <strong>Lime</strong>
                <br />
                <code>.bg-lime</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-green rounded mr-4" />
              <div>
                <strong>Green</strong>
                <br />
                <code>.bg-green</code>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col width={4}>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-teal rounded mr-4" />
              <div>
                <strong>Teal</strong>
                <br />
                <code>.bg-teal</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-cyan rounded mr-4" />
              <div>
                <strong>Cyan</strong>
                <br />
                <code>.bg-cyan</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-gray rounded mr-4" />
              <div>
                <strong>Gray</strong>
                <br />
                <code>.bg-gray</code>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4">
              <div class="w-7 h-7 bg-gray-dark rounded mr-4" />
              <div>
                <strong>Dark gray</strong>
                <br />
                <code>.bg-gray-dark</code>
              </div>
            </div>
          </Grid.Col>
        </Grid.Row>
      </ComponentDemo>

      <Header.H3>Tinting backgrounds</Header.H3>
      <p>
        Translucent background fills to shade an element against a background.
        You can use one of few suffixes: -darkest, -darker, -dark, -lightest,
        -lighter or -light.
      </p>
      <ComponentDemo>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-darkest rounded mr-4" />
          <div>
            <strong>Darkest blue</strong>
            <br />
            <code>.bg-blue-darkest</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-darker rounded mr-4" />
          <div>
            <strong>Darker blue</strong>
            <br />
            <code>.bg-blue-darker</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-dark rounded mr-4" />
          <div>
            <strong>Dark blue</strong>
            <br />
            <code>.bg-blue-dark</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue rounded mr-4" />
          <div>
            <strong>Default blue</strong>
            <br />
            <code>.bg-blue</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-light rounded mr-4" />
          <div>
            <strong>Light blue</strong>
            <br />
            <code>.bg-blue-light</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-lighter rounded mr-4" />
          <div>
            <strong>Lighter blue</strong>
            <br />
            <code>.bg-blue-lighter</code>
          </div>
        </div>
        <div class="d-flex align-items-center mb-4">
          <div class="w-7 h-7 bg-blue-lightest rounded mr-4" />
          <div>
            <strong>Lightest blue</strong>
            <br />
            <code>.bg-blue-lightest</code>
          </div>
        </div>
      </ComponentDemo>
      <Header.H2>Color Prop</Header.H2>
      <p>User the 'color' prop on select components</p>
      <ComponentDemo>
        <React.Fragment>
          <Button color="primary" className="mr-2">
            color='primary'
          </Button>
          <Button color="secondary" className="mr-2">
            color='secondary'
          </Button>
          <Button color="success" className="mr-2">
            color='secondary'
          </Button>
          <Button color="info" className="mr-2">
            color='info'
          </Button>
          <Button color="alert" className="mr-2">
            color='alert'
          </Button>
          <Button color="danger">color='danger'</Button>
        </React.Fragment>
      </ComponentDemo>
    </DocsPageWrapper>
  );
}
export default DocsColorsPage;

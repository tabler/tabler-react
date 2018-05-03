// @flow

import * as React from "react";

import { Page, Grid, Card, Icon } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function IconPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content title="Icons">
        <Card>
          <Card.Header>
            <Card.Title>Feather Icons</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  Simply beautiful open source icons. For more info{" "}
                  <a
                    href="https://feathericons.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>.
                </p>
                <p>
                  <code>&lt;Icon prefix="fe" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="activity"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-activity"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="airplay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-airplay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="alert-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-alert-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="alert-octagon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-alert-octagon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="alert-triangle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-alert-triangle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="align-center"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-align-center"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="align-justify"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-align-justify"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="align-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-align-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="align-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-align-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="anchor"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-anchor"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="aperture"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-aperture"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-down-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-down-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-down-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-down-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-down-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-down-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-left-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-left-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-right-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-right-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-up-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-up-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-up-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-up-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="arrow-up-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-arrow-up-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="at-sign"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-at-sign"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="award"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-award"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bar-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bar-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bar-chart-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bar-chart-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="battery"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-battery"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="battery-charging"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-battery-charging"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bell"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bell"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bell-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bell-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bluetooth"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bluetooth"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bold"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bold"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="book"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-book"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="book-open"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-book-open"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="bookmark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-bookmark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="box"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-box"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="briefcase"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-briefcase"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="calendar"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-calendar"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="camera"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-camera"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="camera-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-camera-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cast"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cast"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="check"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-check"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="check-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-check-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="check-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-check-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevron-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevron-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevron-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevron-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevron-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevron-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevron-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevron-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevrons-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevrons-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevrons-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevrons-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevrons-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevrons-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chevrons-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chevrons-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="chrome"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-chrome"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="clipboard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-clipboard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="clock"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-clock"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud-drizzle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud-drizzle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud-lightning"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud-lightning"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud-rain"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud-rain"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cloud-snow"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cloud-snow"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="code"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-code"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="codepen"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-codepen"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="command"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-command"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="compass"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-compass"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="copy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-copy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-down-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-down-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-down-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-down-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-left-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-left-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-left-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-left-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-right-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-right-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-right-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-right-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-up-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-up-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="corner-up-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-corner-up-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="cpu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-cpu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="credit-card"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-credit-card"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="crop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-crop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="crosshair"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-crosshair"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="database"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-database"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="delete"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-delete"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="disc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-disc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="dollar-sign"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-dollar-sign"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="download"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-download"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="download-cloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-download-cloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="droplet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-droplet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="edit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-edit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="edit-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-edit-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="edit-3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-edit-3"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="external-link"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-external-link"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="eye"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-eye"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="eye-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-eye-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="facebook"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-facebook"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="fast-forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-fast-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="feather"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-feather"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="file"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-file"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="file-minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-file-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="file-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-file-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="file-text"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-file-text"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="film"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-film"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="filter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-filter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="flag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-flag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="folder"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-folder"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="folder-minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-folder-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="folder-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-folder-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="git-branch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-git-branch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="git-commit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-git-commit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="git-merge"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-git-merge"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="git-pull-request"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-git-pull-request"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="github"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-github"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="gitlab"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-gitlab"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="globe"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-globe"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="grid"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-grid"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="hard-drive"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-hard-drive"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="hash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-hash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="headphones"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-headphones"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="heart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-heart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="help-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-help-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="home"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-home"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="image"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-image"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="inbox"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-inbox"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="info"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-info"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="instagram"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-instagram"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="italic"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-italic"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="layers"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-layers"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="layout"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-layout"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="life-buoy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-life-buoy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="link"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-link"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="link-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-link-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="linkedin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-linkedin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="list"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-list"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="loader"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-loader"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="lock"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-lock"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="log-in"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-log-in"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="log-out"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-log-out"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="mail"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-mail"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="map"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-map"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="map-pin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-map-pin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="maximize"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-maximize"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="maximize-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-maximize-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="menu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-menu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="message-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-message-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="message-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-message-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="mic"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-mic"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="mic-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-mic-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="minimize"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-minimize"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="minimize-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-minimize-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="minus-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-minus-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="minus-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-minus-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="monitor"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-monitor"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="moon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-moon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="more-horizontal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-more-horizontal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="more-vertical"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-more-vertical"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="move"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-move"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="music"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-music"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="navigation"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-navigation"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="navigation-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-navigation-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="octagon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-octagon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="package"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-package"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="paperclip"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-paperclip"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="pause"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-pause"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="pause-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-pause-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="percent"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-percent"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-call"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-call"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-forwarded"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-forwarded"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-incoming"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-incoming"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-missed"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-missed"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="phone-outgoing"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-phone-outgoing"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="pie-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-pie-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="play"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-play"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="play-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-play-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="plus-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-plus-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="plus-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-plus-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="pocket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-pocket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="power"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-power"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="printer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-printer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="radio"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-radio"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="refresh-ccw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-refresh-ccw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="refresh-cw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-refresh-cw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="repeat"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-repeat"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="rewind"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-rewind"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="rotate-ccw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-rotate-ccw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="rotate-cw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-rotate-cw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="rss"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-rss"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="save"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-save"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="scissors"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-scissors"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="search"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-search"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="send"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-send"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="server"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-server"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="settings"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-settings"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="share"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-share"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="share-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-share-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="shield"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-shield"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="shield-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-shield-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="shopping-bag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-shopping-bag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="shopping-cart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-shopping-cart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="shuffle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-shuffle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="sidebar"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-sidebar"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="skip-back"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-skip-back"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="skip-forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-skip-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="slack"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-slack"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="slash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-slash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="sliders"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-sliders"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="smartphone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-smartphone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="speaker"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-speaker"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="star"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-star"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="stop-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-stop-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="sun"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-sun"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="sunrise"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-sunrise"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="sunset"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-sunset"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="tablet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-tablet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="tag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-tag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="target"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-target"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="terminal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-terminal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="thermometer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-thermometer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="thumbs-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-thumbs-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="thumbs-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-thumbs-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="toggle-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-toggle-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="toggle-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-toggle-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="trash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-trash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="trash-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-trash-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="trending-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-trending-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="trending-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-trending-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="triangle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-triangle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="truck"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-truck"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="tv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-tv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="twitter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-twitter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="type"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-type"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="umbrella"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-umbrella"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="underline"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-underline"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="unlock"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-unlock"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="upload"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-upload"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="upload-cloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-upload-cloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="user"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-user"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="user-check"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-user-check"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="user-minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-user-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="user-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-user-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="user-x"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-user-x"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="users"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-users"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="video"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-video"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="video-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-video-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="voicemail"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-voicemail"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="volume"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-volume"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="volume-1"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-volume-1"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="volume-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-volume-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="volume-x"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-volume-x"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="watch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-watch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="wifi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-wifi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="wifi-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-wifi-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="wind"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-wind"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="x"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-x"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="x-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-x-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="x-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-x-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="zap"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-zap"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="zap-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-zap-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="zoom-in"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-zoom-in"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fe"
                        name="zoom-out"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fe fe-zoom-out"
                      />
                    </li>
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Font Awesome</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  Powered by Font Awesome set. For more info{" "}
                  <a
                    href="http://fontawesome.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>.
                </p>
                <p>
                  <code>&lt;Icon prefix="fa" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="500px"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-500px"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="address-book"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-address-book"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="address-book-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-address-book-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="address-card"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-address-card"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="address-card-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-address-card-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="adjust"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-adjust"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="adn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-adn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="align-center"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-align-center"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="align-justify"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-align-justify"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="align-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-align-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="align-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-align-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="amazon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-amazon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ambulance"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ambulance"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="american-sign-language-interpreting"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-american-sign-language-interpreting"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="anchor"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-anchor"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="android"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-android"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angellist"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angellist"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-double-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-double-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-double-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-double-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-double-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-double-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-double-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-double-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="angle-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-angle-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="apple"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-apple"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="archive"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-archive"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="area-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-area-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-o-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-o-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-o-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-o-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-o-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-o-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-o-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-o-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-circle-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-circle-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrow-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrow-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrows"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrows"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrows-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrows-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrows-h"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrows-h"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="arrows-v"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-arrows-v"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="asl-interpreting"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-asl-interpreting"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="assistive-listening-systems"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-assistive-listening-systems"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="asterisk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-asterisk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="at"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-at"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="audio-description"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-audio-description"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="automobile"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-automobile"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="backward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-backward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="balance-scale"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-balance-scale"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ban"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ban"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bandcamp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bandcamp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bank"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bank"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bar-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bar-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bar-chart-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bar-chart-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="barcode"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-barcode"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bars"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bars"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bath"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bath"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bathtub"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bathtub"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-0"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-0"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-1"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-1"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-3"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-4"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-4"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-empty"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-empty"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-full"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-full"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-half"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-half"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-quarter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-quarter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="battery-three-quarters"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-battery-three-quarters"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bed"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bed"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="beer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-beer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="behance"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-behance"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="behance-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-behance-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bell"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bell"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bell-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bell-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bell-slash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bell-slash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bell-slash-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bell-slash-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bicycle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bicycle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="binoculars"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-binoculars"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="birthday-cake"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-birthday-cake"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bitbucket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bitbucket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bitbucket-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bitbucket-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bitcoin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bitcoin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="black-tie"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-black-tie"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="blind"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-blind"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bluetooth"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bluetooth"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bluetooth-b"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bluetooth-b"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bold"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bold"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bolt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bolt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bomb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bomb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="book"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-book"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bookmark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bookmark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bookmark-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bookmark-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="braille"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-braille"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="briefcase"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-briefcase"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="btc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-btc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bug"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bug"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="building"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-building"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="building-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-building-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bullhorn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bullhorn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bullseye"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bullseye"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="bus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-bus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="buysellads"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-buysellads"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cab"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cab"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calculator"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calculator"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar-check-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar-check-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar-minus-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar-minus-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar-plus-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar-plus-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="calendar-times-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-calendar-times-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="camera"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-camera"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="camera-retro"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-camera-retro"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="car"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-car"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-square-o-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-square-o-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-square-o-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-square-o-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-square-o-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-square-o-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-square-o-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-square-o-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="caret-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-caret-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cart-arrow-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cart-arrow-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cart-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cart-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-amex"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-amex"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-diners-club"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-diners-club"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-discover"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-discover"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-jcb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-jcb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-mastercard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-mastercard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-paypal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-paypal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-stripe"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-stripe"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cc-visa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cc-visa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="certificate"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-certificate"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chain"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chain"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chain-broken"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chain-broken"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="check"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-check"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="check-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-check-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="check-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-check-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="check-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-check-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="check-square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-check-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-circle-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-circle-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-circle-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-circle-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-circle-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-circle-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-circle-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-circle-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chevron-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chevron-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="child"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-child"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="chrome"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-chrome"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="circle-o-notch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-circle-o-notch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="circle-thin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-circle-thin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="clipboard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-clipboard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="clock-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-clock-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="clone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-clone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="close"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-close"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cloud-download"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cloud-download"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cloud-upload"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cloud-upload"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cny"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cny"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="code"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-code"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="code-fork"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-code-fork"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="codepen"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-codepen"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="codiepie"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-codiepie"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="coffee"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-coffee"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cog"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cog"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cogs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cogs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="columns"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-columns"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="comment"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-comment"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="comment-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-comment-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="commenting"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-commenting"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="commenting-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-commenting-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="comments"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-comments"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="comments-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-comments-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="compass"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-compass"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="compress"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-compress"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="connectdevelop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-connectdevelop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="contao"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-contao"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="copy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-copy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="copyright"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-copyright"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="creative-commons"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-creative-commons"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="credit-card"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-credit-card"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="credit-card-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-credit-card-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="crop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-crop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="crosshairs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-crosshairs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="css3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-css3"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cube"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cube"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cubes"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cubes"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cut"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cut"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="cutlery"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-cutlery"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dashboard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dashboard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dashcube"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dashcube"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="database"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-database"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="deaf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-deaf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="deafness"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-deafness"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dedent"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dedent"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="delicious"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-delicious"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="desktop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-desktop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="deviantart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-deviantart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="diamond"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-diamond"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="digg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-digg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dollar"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dollar"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dot-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dot-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="download"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-download"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dribbble"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dribbble"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="drivers-license"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-drivers-license"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="drivers-license-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-drivers-license-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="dropbox"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-dropbox"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="drupal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-drupal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="edge"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-edge"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="edit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-edit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eercast"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eercast"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eject"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eject"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ellipsis-h"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ellipsis-h"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ellipsis-v"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ellipsis-v"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="empire"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-empire"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envelope"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envelope"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envelope-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envelope-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envelope-open"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envelope-open"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envelope-open-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envelope-open-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envelope-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envelope-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="envira"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-envira"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eraser"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eraser"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="etsy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-etsy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eur"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eur"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="euro"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-euro"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="exchange"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-exchange"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="exclamation"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-exclamation"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="exclamation-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-exclamation-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="exclamation-triangle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-exclamation-triangle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="expand"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-expand"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="expeditedssl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-expeditedssl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="external-link"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-external-link"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="external-link-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-external-link-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eye"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eye"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eye-slash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eye-slash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="eyedropper"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-eyedropper"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="facebook"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-facebook"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="facebook-f"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-facebook-f"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="facebook-official"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-facebook-official"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="facebook-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-facebook-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fast-backward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fast-backward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fast-forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fast-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fax"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fax"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="feed"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-feed"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="female"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-female"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fighter-jet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fighter-jet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-archive-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-archive-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-audio-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-audio-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-code-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-code-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-excel-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-excel-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-image-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-image-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-movie-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-movie-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-pdf-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-pdf-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-photo-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-photo-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-picture-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-picture-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-powerpoint-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-powerpoint-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-sound-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-sound-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-text"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-text"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-text-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-text-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-video-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-video-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-word-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-word-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="file-zip-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-file-zip-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="files-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-files-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="film"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-film"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="filter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-filter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fire"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fire"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fire-extinguisher"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fire-extinguisher"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="firefox"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-firefox"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="first-order"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-first-order"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flag-checkered"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flag-checkered"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flag-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flag-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flask"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flask"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="flickr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-flickr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="floppy-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-floppy-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="folder"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-folder"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="folder-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-folder-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="folder-open"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-folder-open"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="folder-open-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-folder-open-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="font"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-font"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="font-awesome"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-font-awesome"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fonticons"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fonticons"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="fort-awesome"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-fort-awesome"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="forumbee"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-forumbee"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="foursquare"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-foursquare"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="free-code-camp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-free-code-camp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="frown-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-frown-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="futbol-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-futbol-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gamepad"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gamepad"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gavel"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gavel"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gbp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gbp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ge"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ge"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gear"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gear"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gears"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gears"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="genderless"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-genderless"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="get-pocket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-get-pocket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gg-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gg-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gift"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gift"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="git"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-git"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="git-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-git-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="github"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-github"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="github-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-github-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="github-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-github-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gitlab"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gitlab"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gittip"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gittip"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="glass"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-glass"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="glide"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-glide"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="glide-g"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-glide-g"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="globe"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-globe"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google-plus-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google-plus-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google-plus-official"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google-plus-official"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google-plus-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google-plus-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="google-wallet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-google-wallet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="graduation-cap"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-graduation-cap"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="gratipay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-gratipay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="grav"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-grav"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="group"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-group"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="h-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-h-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hacker-news"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hacker-news"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-grab-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-grab-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-lizard-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-lizard-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-o-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-o-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-o-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-o-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-o-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-o-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-o-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-o-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-paper-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-paper-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-peace-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-peace-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-pointer-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-pointer-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-rock-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-rock-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-scissors-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-scissors-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-spock-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-spock-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hand-stop-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hand-stop-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="handshake-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-handshake-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hard-of-hearing"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hard-of-hearing"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hashtag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hashtag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hdd-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hdd-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="header"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-header"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="headphones"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-headphones"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="heart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-heart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="heart-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-heart-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="heartbeat"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-heartbeat"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="history"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-history"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="home"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-home"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hospital-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hospital-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hotel"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hotel"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-1"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-1"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-3"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-end"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-end"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-half"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-half"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="hourglass-start"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-hourglass-start"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="houzz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-houzz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="html5"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-html5"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="i-cursor"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-i-cursor"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="id-badge"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-id-badge"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="id-card"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-id-card"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="id-card-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-id-card-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ils"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ils"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="image"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-image"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="imdb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-imdb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="inbox"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-inbox"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="indent"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-indent"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="industry"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-industry"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="info"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-info"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="info-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-info-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="inr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-inr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="instagram"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-instagram"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="institution"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-institution"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="internet-explorer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-internet-explorer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="intersex"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-intersex"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ioxhost"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ioxhost"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="italic"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-italic"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="joomla"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-joomla"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="jpy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-jpy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="jsfiddle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-jsfiddle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="key"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-key"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="keyboard-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-keyboard-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="krw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-krw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="language"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-language"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="laptop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-laptop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="lastfm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-lastfm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="lastfm-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-lastfm-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="leaf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-leaf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="leanpub"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-leanpub"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="legal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-legal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="lemon-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-lemon-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="level-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-level-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="level-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-level-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="life-bouy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-life-bouy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="life-buoy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-life-buoy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="life-ring"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-life-ring"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="life-saver"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-life-saver"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="lightbulb-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-lightbulb-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="line-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-line-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="link"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-link"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="linkedin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-linkedin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="linkedin-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-linkedin-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="linode"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-linode"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="linux"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-linux"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="list"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-list"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="list-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-list-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="list-ol"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-list-ol"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="list-ul"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-list-ul"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="location-arrow"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-location-arrow"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="lock"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-lock"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="long-arrow-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-long-arrow-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="long-arrow-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-long-arrow-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="long-arrow-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-long-arrow-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="long-arrow-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-long-arrow-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="low-vision"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-low-vision"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="magic"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-magic"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="magnet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-magnet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mail-forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mail-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mail-reply"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mail-reply"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mail-reply-all"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mail-reply-all"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="male"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-male"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="map"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-map"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="map-marker"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-map-marker"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="map-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-map-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="map-pin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-map-pin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="map-signs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-map-signs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mars"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mars"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mars-double"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mars-double"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mars-stroke"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mars-stroke"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mars-stroke-h"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mars-stroke-h"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mars-stroke-v"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mars-stroke-v"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="maxcdn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-maxcdn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="meanpath"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-meanpath"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="medium"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-medium"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="medkit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-medkit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="meetup"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-meetup"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="meh-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-meh-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mercury"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mercury"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="microchip"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-microchip"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="microphone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-microphone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="microphone-slash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-microphone-slash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="minus-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-minus-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="minus-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-minus-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="minus-square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-minus-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mixcloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mixcloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mobile"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mobile"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mobile-phone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mobile-phone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="modx"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-modx"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="money"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-money"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="moon-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-moon-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mortar-board"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mortar-board"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="motorcycle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-motorcycle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="mouse-pointer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-mouse-pointer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="music"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-music"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="navicon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-navicon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="neuter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-neuter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="newspaper-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-newspaper-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="object-group"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-object-group"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="object-ungroup"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-object-ungroup"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="odnoklassniki"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-odnoklassniki"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="odnoklassniki-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-odnoklassniki-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="opencart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-opencart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="openid"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-openid"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="opera"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-opera"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="optin-monster"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-optin-monster"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="outdent"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-outdent"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pagelines"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pagelines"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paint-brush"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paint-brush"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paper-plane"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paper-plane"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paper-plane-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paper-plane-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paperclip"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paperclip"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paragraph"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paragraph"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paste"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paste"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pause"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pause"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pause-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pause-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pause-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pause-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="paypal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-paypal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pencil"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pencil"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pencil-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pencil-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pencil-square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pencil-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="percent"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-percent"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="phone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-phone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="phone-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-phone-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="photo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-photo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="picture-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-picture-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pie-chart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pie-chart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pied-piper"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pied-piper"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pied-piper-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pied-piper-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pied-piper-pp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pied-piper-pp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pinterest"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pinterest"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pinterest-p"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pinterest-p"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="pinterest-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-pinterest-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plane"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plane"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="play"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-play"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="play-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-play-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="play-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-play-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plug"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plug"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plus-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plus-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plus-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plus-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="plus-square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-plus-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="podcast"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-podcast"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="power-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-power-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="print"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-print"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="product-hunt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-product-hunt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="puzzle-piece"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-puzzle-piece"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="qq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-qq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="qrcode"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-qrcode"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="question"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-question"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="question-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-question-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="question-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-question-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="quora"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-quora"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="quote-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-quote-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="quote-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-quote-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ra"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ra"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="random"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-random"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ravelry"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ravelry"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rebel"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rebel"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="recycle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-recycle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reddit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reddit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reddit-alien"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reddit-alien"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reddit-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reddit-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="refresh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-refresh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="registered"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-registered"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="remove"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-remove"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="renren"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-renren"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reorder"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reorder"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="repeat"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-repeat"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reply"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reply"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="reply-all"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-reply-all"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="resistance"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-resistance"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="retweet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-retweet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rmb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rmb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="road"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-road"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rocket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rocket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rotate-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rotate-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rotate-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rotate-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rouble"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rouble"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rss"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rss"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rss-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rss-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rub"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rub"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ruble"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ruble"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="rupee"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-rupee"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="s15"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-s15"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="safari"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-safari"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="save"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-save"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="scissors"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-scissors"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="scribd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-scribd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="search"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-search"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="search-minus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-search-minus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="search-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-search-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sellsy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sellsy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="send"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-send"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="send-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-send-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="server"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-server"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="share"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-share"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="share-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-share-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="share-alt-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-share-alt-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="share-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-share-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="share-square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-share-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shekel"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shekel"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sheqel"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sheqel"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shield"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shield"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ship"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ship"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shirtsinbulk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shirtsinbulk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shopping-bag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shopping-bag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shopping-basket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shopping-basket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shopping-cart"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shopping-cart"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="shower"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-shower"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sign-in"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sign-in"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sign-language"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sign-language"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sign-out"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sign-out"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="signal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-signal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="signing"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-signing"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="simplybuilt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-simplybuilt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sitemap"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sitemap"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="skyatlas"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-skyatlas"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="skype"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-skype"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="slack"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-slack"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sliders"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sliders"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="slideshare"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-slideshare"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="smile-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-smile-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="snapchat"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-snapchat"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="snapchat-ghost"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-snapchat-ghost"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="snapchat-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-snapchat-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="snowflake-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-snowflake-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="soccer-ball-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-soccer-ball-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-alpha-asc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-alpha-asc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-alpha-desc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-alpha-desc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-amount-asc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-amount-asc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-amount-desc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-amount-desc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-asc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-asc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-desc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-desc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-numeric-asc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-numeric-asc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-numeric-desc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-numeric-desc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sort-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sort-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="soundcloud"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-soundcloud"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="space-shuttle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-space-shuttle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="spinner"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-spinner"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="spoon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-spoon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="spotify"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-spotify"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="square-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-square-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stack-exchange"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stack-exchange"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stack-overflow"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stack-overflow"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star-half"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star-half"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star-half-empty"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star-half-empty"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star-half-full"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star-half-full"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star-half-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star-half-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="star-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-star-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="steam"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-steam"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="steam-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-steam-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="step-backward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-step-backward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="step-forward"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-step-forward"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stethoscope"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stethoscope"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sticky-note"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sticky-note"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sticky-note-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sticky-note-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stop"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stop"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stop-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stop-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stop-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stop-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="street-view"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-street-view"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="strikethrough"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-strikethrough"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stumbleupon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stumbleupon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="stumbleupon-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-stumbleupon-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="subscript"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-subscript"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="subway"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-subway"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="suitcase"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-suitcase"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="sun-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-sun-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="superpowers"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-superpowers"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="superscript"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-superscript"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="support"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-support"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="table"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-table"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tablet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tablet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tachometer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tachometer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tags"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tags"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tasks"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tasks"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="taxi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-taxi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="telegram"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-telegram"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="television"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-television"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tencent-weibo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tencent-weibo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="terminal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-terminal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="text-height"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-text-height"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="text-width"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-text-width"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="th"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-th"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="th-large"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-th-large"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="th-list"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-th-list"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="themeisle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-themeisle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-0"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-0"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-1"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-1"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-2"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-2"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-3"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-3"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-4"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-4"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-empty"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-empty"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-full"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-full"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-half"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-half"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-quarter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-quarter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thermometer-three-quarters"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thermometer-three-quarters"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thumb-tack"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thumb-tack"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thumbs-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thumbs-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thumbs-o-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thumbs-o-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thumbs-o-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thumbs-o-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="thumbs-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-thumbs-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="ticket"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-ticket"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="times"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-times"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="times-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-times-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="times-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-times-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="times-rectangle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-times-rectangle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="times-rectangle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-times-rectangle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tint"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tint"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-left"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-left"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-on"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-on"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-right"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-right"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="toggle-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-toggle-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="trademark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-trademark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="train"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-train"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="transgender"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-transgender"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="transgender-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-transgender-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="trash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-trash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="trash-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-trash-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tree"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tree"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="trello"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-trello"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tripadvisor"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tripadvisor"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="trophy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-trophy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="truck"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-truck"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="try"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-try"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tty"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tty"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tumblr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tumblr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tumblr-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tumblr-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="turkish-lira"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-turkish-lira"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="tv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-tv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="twitch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-twitch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="twitter"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-twitter"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="twitter-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-twitter-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="umbrella"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-umbrella"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="underline"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-underline"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="undo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-undo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="universal-access"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-universal-access"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="university"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-university"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="unlink"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-unlink"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="unlock"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-unlock"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="unlock-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-unlock-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="unsorted"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-unsorted"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="upload"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-upload"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="usb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-usb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="usd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-usd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-circle"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-circle"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-circle-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-circle-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-md"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-md"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-plus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-plus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-secret"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-secret"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="user-times"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-user-times"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="users"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-users"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vcard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vcard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vcard-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vcard-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="venus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-venus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="venus-double"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-venus-double"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="venus-mars"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-venus-mars"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="viacoin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-viacoin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="viadeo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-viadeo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="viadeo-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-viadeo-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="video-camera"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-video-camera"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vimeo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vimeo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vimeo-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vimeo-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vine"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vine"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="vk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-vk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="volume-control-phone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-volume-control-phone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="volume-down"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-volume-down"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="volume-off"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-volume-off"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="volume-up"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-volume-up"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="warning"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-warning"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wechat"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wechat"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="weibo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-weibo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="weixin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-weixin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="whatsapp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-whatsapp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wheelchair"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wheelchair"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wheelchair-alt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wheelchair-alt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wifi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wifi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wikipedia-w"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wikipedia-w"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="window-close"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-window-close"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="window-close-o"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-window-close-o"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="window-maximize"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-window-maximize"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="window-minimize"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-window-minimize"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="window-restore"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-window-restore"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="windows"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-windows"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="won"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-won"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wordpress"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wordpress"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wpbeginner"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wpbeginner"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wpexplorer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wpexplorer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wpforms"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wpforms"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="wrench"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-wrench"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="xing"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-xing"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="xing-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-xing-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="y-combinator"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-y-combinator"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="y-combinator-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-y-combinator-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yahoo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yahoo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yc-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yc-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yelp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yelp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yen"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yen"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="yoast"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-yoast"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="youtube"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-youtube"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="youtube-play"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-youtube-play"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="youtube-square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="fa fa-youtube-square"
                      />
                    </li>
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Flags</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  <code>&lt;Icon prefix="flat" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ad"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ad"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ae"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ae"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="af"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-af"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ag"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ag"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ai"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ai"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="al"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-al"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="am"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-am"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ao"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ao"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="aq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-aq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ar"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ar"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="as"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-as"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="at"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-at"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="au"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-au"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="aw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-aw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ax"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ax"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="az"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-az"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ba"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ba"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="be"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-be"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bj"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bj"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="br"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-br"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="by"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-by"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="bz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-bz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ca"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ca"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ci"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ci"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ck"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ck"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="co"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-co"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cx"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cx"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="cz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-cz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="de"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-de"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="dj"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-dj"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="dk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-dk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="dm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-dm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="do"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-do"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="dz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-dz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ec"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ec"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ee"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ee"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="eg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-eg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="eh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-eh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="er"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-er"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="es"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-es"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="et"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-et"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="eu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-eu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fj"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fj"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="fr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-fr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ga"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ga"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gb-eng"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gb-eng"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gb-nir"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gb-nir"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gb-sct"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gb-sct"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gb-wls"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gb-wls"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ge"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ge"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="gy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-gy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="hk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-hk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="hm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-hm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="hn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-hn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="hr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-hr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ht"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ht"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="hu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-hu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="id"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-id"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ie"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ie"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="il"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-il"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="im"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-im"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="in"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-in"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="io"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-io"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="iq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-iq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ir"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ir"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="is"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-is"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="it"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-it"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="je"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-je"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="jm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-jm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="jo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-jo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="jp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-jp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ke"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ke"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ki"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ki"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="km"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-km"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ky"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ky"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="kz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-kz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="la"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-la"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="li"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-li"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ls"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ls"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="lv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-lv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ly"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ly"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ma"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ma"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="md"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-md"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="me"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-me"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ml"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ml"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mp"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mp"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mq"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mq"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ms"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ms"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mx"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mx"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="my"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-my"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="mz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-mz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="na"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-na"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ne"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ne"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ng"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ng"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ni"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ni"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="no"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-no"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="np"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-np"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="nz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-nz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="om"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-om"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pe"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pe"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ph"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ph"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ps"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ps"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="pw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-pw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="py"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-py"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="qa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-qa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="re"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-re"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ro"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ro"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="rs"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-rs"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ru"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ru"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="rw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-rw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sd"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sd"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="se"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-se"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sh"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sh"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="si"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-si"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sj"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sj"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="so"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-so"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ss"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ss"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="st"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-st"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sx"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sx"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="sz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-sz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="td"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-td"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="th"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-th"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tj"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tj"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tk"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tk"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tl"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tl"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="to"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-to"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tr"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tr"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tv"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tv"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tw"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="tz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-tz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ua"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ua"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ug"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ug"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="um"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-um"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="un"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-un"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="us"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-us"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="uy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-uy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="uz"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-uz"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="va"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-va"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="vc"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-vc"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ve"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ve"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="vg"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-vg"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="vi"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-vi"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="vn"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-vn"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="vu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-vu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="wf"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-wf"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ws"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ws"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="ye"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-ye"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="yt"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-yt"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="za"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-za"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="zm"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-zm"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="flag"
                        name="zw"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="flag flag-zw"
                      />
                    </li>
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <Card.Title>Payments</Card.Title>
          </Card.Header>
          <Card.Body>
            <Grid.Row>
              <Grid.Col lg={3}>
                <p>
                  <code>&lt;Icon prefix="payment" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="2checkout"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-2checkout"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="alipay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-alipay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="amazon"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-amazon"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="americanexpress"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-americanexpress"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="applepay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-applepay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bancontact"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bancontact"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bitcoin"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bitcoin"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bitpay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bitpay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="cirrus"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-cirrus"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="clickandbuy"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-clickandbuy"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="coinkite"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-coinkite"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="dinersclub"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-dinersclub"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="directdebit"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-directdebit"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="discover"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-discover"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="dwolla"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-dwolla"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ebay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ebay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="eway"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-eway"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="giropay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-giropay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="googlewallet"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-googlewallet"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ingenico"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ingenico"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="jcb"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-jcb"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="klarna"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-klarna"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="laser"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-laser"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="maestro"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-maestro"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="mastercard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-mastercard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="monero"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-monero"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="neteller"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-neteller"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ogone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ogone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="okpay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-okpay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paybox"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paybox"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paymill"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paymill"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payoneer"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payoneer"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paypal"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paypal"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paysafecard"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paysafecard"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payu"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payu"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payza"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payza"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ripple"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ripple"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="sage"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-sage"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="sepa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-sepa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="shopify"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-shopify"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="skrill"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-skrill"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="solo"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-solo"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="square"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-square"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="stripe"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-stripe"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="switch"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-switch"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ukash"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ukash"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="unionpay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-unionpay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="verifone"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-verifone"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="verisign"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-verisign"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="visa"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-visa"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="webmoney"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-webmoney"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="westernunion"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-westernunion"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="worldpay"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-worldpay"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="2checkout-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-2checkout-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="alipay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-alipay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="amazon-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-amazon-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="americanexpress-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-americanexpress-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="applepay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-applepay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bancontact-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bancontact-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bitcoin-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bitcoin-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="bitpay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-bitpay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="cirrus-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-cirrus-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="clickandbuy-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-clickandbuy-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="coinkite-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-coinkite-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="dinersclub-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-dinersclub-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="directdebit-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-directdebit-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="discover-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-discover-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="dwolla-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-dwolla-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ebay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ebay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="eway-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-eway-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="giropay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-giropay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="googlewallet-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-googlewallet-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ingenico-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ingenico-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="jcb-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-jcb-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="klarna-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-klarna-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="laser-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-laser-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="maestro-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-maestro-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="mastercard-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-mastercard-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="monero-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-monero-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="neteller-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-neteller-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ogone-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ogone-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="okpay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-okpay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paybox-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paybox-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paymill-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paymill-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payone-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payone-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payoneer-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payoneer-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paypal-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paypal-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="paysafecard-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-paysafecard-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payu-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payu-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="payza-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-payza-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ripple-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ripple-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="sage-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-sage-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="sepa-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-sepa-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="shopify-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-shopify-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="skrill-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-skrill-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="solo-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-solo-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="square-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-square-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="stripe-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-stripe-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="switch-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-switch-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="ukash-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-ukash-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="unionpay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-unionpay-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="verifone-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-verifone-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="verisign-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-verisign-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="visa-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-visa-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="webmoney-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-webmoney-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="westernunion-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-westernunion-dark"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="payment"
                        name="worldpay-dark"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="payment payment-worldpay-dark"
                      />
                    </li>
                  </ul>
                </div>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Page.Content>
    </SiteWrapper>
  );
}

export default IconPage;

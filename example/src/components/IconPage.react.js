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
                      <Icon prefix="fe" name="activity" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="airplay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="alert-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="alert-octagon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="alert-triangle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="align-center" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="align-justify" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="align-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="align-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="anchor" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="aperture" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-down-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-down-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-down-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-left-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-right-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-up-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-up-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="arrow-up-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="at-sign" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="award" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bar-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bar-chart-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="battery" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="battery-charging" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bell" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bell-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bluetooth" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bold" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="book" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="book-open" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="bookmark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="box" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="briefcase" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="calendar" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="camera" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="camera-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cast" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="check" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="check-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="check-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevron-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevron-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevron-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevron-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevrons-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevrons-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevrons-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chevrons-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="chrome" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="clipboard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="clock" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud-drizzle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud-lightning" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud-rain" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cloud-snow" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="code" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="codepen" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="command" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="compass" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="copy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-down-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-down-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-left-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-left-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-right-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-right-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-up-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="corner-up-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="cpu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="credit-card" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="crop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="crosshair" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="database" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="delete" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="disc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="dollar-sign" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="download" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="download-cloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="droplet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="edit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="edit-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="edit-3" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="external-link" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="eye" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="eye-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="facebook" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="fast-forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="feather" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="file" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="file-minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="file-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="file-text" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="film" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="filter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="flag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="folder" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="folder-minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="folder-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="git-branch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="git-commit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="git-merge" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="git-pull-request" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="github" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="gitlab" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="globe" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="grid" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="hard-drive" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="hash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="headphones" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="heart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="help-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="home" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="image" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="inbox" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="info" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="instagram" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="italic" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="layers" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="layout" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="life-buoy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="link" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="link-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="linkedin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="list" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="loader" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="lock" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="log-in" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="log-out" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="mail" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="map" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="map-pin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="maximize" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="maximize-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="menu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="message-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="message-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="mic" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="mic-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="minimize" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="minimize-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="minus-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="minus-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="monitor" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="moon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="more-horizontal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="more-vertical" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="move" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="music" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="navigation" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="navigation-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="octagon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="package" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="paperclip" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="pause" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="pause-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="percent" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-call" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-forwarded" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-incoming" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-missed" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="phone-outgoing" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="pie-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="play" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="play-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="plus-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="plus-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="pocket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="power" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="printer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="radio" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="refresh-ccw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="refresh-cw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="repeat" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="rewind" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="rotate-ccw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="rotate-cw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="rss" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="save" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="scissors" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="search" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="send" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="server" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="settings" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="share" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="share-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="shield" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="shield-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="shopping-bag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="shopping-cart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="shuffle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="sidebar" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="skip-back" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="skip-forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="slack" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="slash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="sliders" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="smartphone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="speaker" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="star" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="stop-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="sun" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="sunrise" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="sunset" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="tablet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="tag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="target" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="terminal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="thermometer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="thumbs-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="thumbs-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="toggle-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="toggle-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="trash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="trash-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="trending-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="trending-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="triangle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="truck" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="tv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="twitter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="type" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="umbrella" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="underline" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="unlock" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="upload" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="upload-cloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="user" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="user-check" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="user-minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="user-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="user-x" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="users" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="video" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="video-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="voicemail" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="volume" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="volume-1" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="volume-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="volume-x" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="watch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="wifi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="wifi-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="wind" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="x" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="x-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="x-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="zap" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="zap-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="zoom-in" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fe" name="zoom-out" />
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
                      <Icon prefix="fa" name="500px" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="address-book" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="address-book-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="address-card" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="address-card-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="adjust" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="adn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="align-center" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="align-justify" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="align-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="align-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="amazon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ambulance" />
                    </li>
                    <li className="icons-list-item">
                      <Icon
                        prefix="fa"
                        name="american-sign-language-interpreting"
                      />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="anchor" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="android" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angellist" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-double-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-double-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-double-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-double-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="angle-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="apple" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="archive" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="area-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-o-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-o-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-o-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-o-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-circle-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrow-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrows" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrows-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrows-h" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="arrows-v" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="asl-interpreting" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="assistive-listening-systems" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="asterisk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="at" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="audio-description" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="automobile" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="backward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="balance-scale" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ban" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bandcamp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bank" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bar-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bar-chart-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="barcode" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bars" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bath" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bathtub" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-0" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-1" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-3" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-4" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-empty" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-full" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-half" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-quarter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="battery-three-quarters" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bed" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="beer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="behance" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="behance-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bell" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bell-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bell-slash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bell-slash-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bicycle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="binoculars" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="birthday-cake" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bitbucket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bitbucket-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bitcoin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="black-tie" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="blind" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bluetooth" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bluetooth-b" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bold" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bolt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bomb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="book" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bookmark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bookmark-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="braille" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="briefcase" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="btc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bug" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="building" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="building-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bullhorn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bullseye" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="bus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="buysellads" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cab" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calculator" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar-check-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar-minus-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar-plus-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="calendar-times-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="camera" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="camera-retro" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="car" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-square-o-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-square-o-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-square-o-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-square-o-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="caret-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cart-arrow-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cart-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-amex" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-diners-club" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-discover" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-jcb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-mastercard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-paypal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-stripe" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cc-visa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="certificate" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chain" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chain-broken" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="check" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="check-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="check-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="check-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="check-square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-circle-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-circle-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-circle-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-circle-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chevron-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="child" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="chrome" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="circle-o-notch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="circle-thin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="clipboard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="clock-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="clone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="close" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cloud-download" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cloud-upload" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cny" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="code" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="code-fork" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="codepen" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="codiepie" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="coffee" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cog" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cogs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="columns" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="comment" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="comment-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="commenting" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="commenting-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="comments" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="comments-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="compass" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="compress" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="connectdevelop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="contao" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="copy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="copyright" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="creative-commons" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="credit-card" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="credit-card-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="crop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="crosshairs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="css3" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cube" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cubes" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cut" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="cutlery" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dashboard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dashcube" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="database" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="deaf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="deafness" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dedent" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="delicious" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="desktop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="deviantart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="diamond" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="digg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dollar" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dot-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="download" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dribbble" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="drivers-license" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="drivers-license-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="dropbox" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="drupal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="edge" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="edit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eercast" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eject" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ellipsis-h" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ellipsis-v" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="empire" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envelope" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envelope-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envelope-open" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envelope-open-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envelope-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="envira" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eraser" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="etsy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eur" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="euro" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="exchange" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="exclamation" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="exclamation-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="exclamation-triangle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="expand" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="expeditedssl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="external-link" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="external-link-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eye" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eye-slash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="eyedropper" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="facebook" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="facebook-f" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="facebook-official" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="facebook-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fast-backward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fast-forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fax" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="feed" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="female" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fighter-jet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-archive-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-audio-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-code-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-excel-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-image-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-movie-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-pdf-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-photo-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-picture-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-powerpoint-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-sound-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-text" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-text-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-video-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-word-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="file-zip-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="files-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="film" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="filter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fire" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fire-extinguisher" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="firefox" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="first-order" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flag-checkered" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flag-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flask" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="flickr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="floppy-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="folder" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="folder-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="folder-open" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="folder-open-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="font" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="font-awesome" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fonticons" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="fort-awesome" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="forumbee" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="foursquare" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="free-code-camp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="frown-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="futbol-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gamepad" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gavel" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gbp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ge" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gear" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gears" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="genderless" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="get-pocket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gg-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gift" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="git" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="git-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="github" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="github-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="github-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gitlab" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gittip" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="glass" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="glide" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="glide-g" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="globe" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google-plus-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google-plus-official" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google-plus-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="google-wallet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="graduation-cap" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="gratipay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="grav" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="group" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="h-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hacker-news" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-grab-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-lizard-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-o-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-o-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-o-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-o-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-paper-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-peace-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-pointer-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-rock-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-scissors-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-spock-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hand-stop-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="handshake-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hard-of-hearing" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hashtag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hdd-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="header" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="headphones" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="heart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="heart-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="heartbeat" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="history" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="home" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hospital-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hotel" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-1" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-3" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-end" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-half" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="hourglass-start" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="houzz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="html5" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="i-cursor" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="id-badge" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="id-card" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="id-card-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ils" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="image" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="imdb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="inbox" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="indent" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="industry" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="info" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="info-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="inr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="instagram" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="institution" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="internet-explorer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="intersex" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ioxhost" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="italic" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="joomla" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="jpy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="jsfiddle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="key" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="keyboard-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="krw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="language" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="laptop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="lastfm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="lastfm-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="leaf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="leanpub" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="legal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="lemon-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="level-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="level-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="life-bouy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="life-buoy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="life-ring" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="life-saver" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="lightbulb-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="line-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="link" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="linkedin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="linkedin-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="linode" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="linux" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="list" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="list-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="list-ol" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="list-ul" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="location-arrow" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="lock" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="long-arrow-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="long-arrow-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="long-arrow-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="long-arrow-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="low-vision" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="magic" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="magnet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mail-forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mail-reply" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mail-reply-all" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="male" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="map" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="map-marker" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="map-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="map-pin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="map-signs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mars" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mars-double" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mars-stroke" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mars-stroke-h" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mars-stroke-v" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="maxcdn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="meanpath" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="medium" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="medkit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="meetup" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="meh-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mercury" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="microchip" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="microphone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="microphone-slash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="minus-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="minus-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="minus-square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mixcloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mobile" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mobile-phone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="modx" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="money" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="moon-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mortar-board" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="motorcycle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="mouse-pointer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="music" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="navicon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="neuter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="newspaper-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="object-group" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="object-ungroup" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="odnoklassniki" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="odnoklassniki-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="opencart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="openid" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="opera" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="optin-monster" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="outdent" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pagelines" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paint-brush" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paper-plane" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paper-plane-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paperclip" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paragraph" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paste" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pause" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pause-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pause-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="paypal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pencil" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pencil-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pencil-square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="percent" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="phone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="phone-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="photo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="picture-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pie-chart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pied-piper" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pied-piper-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pied-piper-pp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pinterest" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pinterest-p" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="pinterest-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plane" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="play" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="play-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="play-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plug" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plus-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plus-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="plus-square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="podcast" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="power-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="print" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="product-hunt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="puzzle-piece" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="qq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="qrcode" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="question" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="question-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="question-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="quora" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="quote-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="quote-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ra" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="random" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ravelry" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rebel" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="recycle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reddit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reddit-alien" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reddit-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="refresh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="registered" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="remove" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="renren" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reorder" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="repeat" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reply" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="reply-all" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="resistance" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="retweet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rmb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="road" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rocket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rotate-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rotate-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rouble" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rss" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rss-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rub" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ruble" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="rupee" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="s15" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="safari" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="save" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="scissors" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="scribd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="search" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="search-minus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="search-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sellsy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="send" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="send-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="server" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="share" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="share-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="share-alt-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="share-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="share-square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shekel" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sheqel" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shield" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ship" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shirtsinbulk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shopping-bag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shopping-basket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shopping-cart" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="shower" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sign-in" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sign-language" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sign-out" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="signal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="signing" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="simplybuilt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sitemap" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="skyatlas" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="skype" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="slack" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sliders" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="slideshare" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="smile-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="snapchat" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="snapchat-ghost" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="snapchat-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="snowflake-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="soccer-ball-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-alpha-asc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-alpha-desc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-amount-asc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-amount-desc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-asc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-desc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-numeric-asc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-numeric-desc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sort-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="soundcloud" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="space-shuttle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="spinner" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="spoon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="spotify" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="square-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stack-exchange" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stack-overflow" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star-half" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star-half-empty" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star-half-full" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star-half-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="star-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="steam" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="steam-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="step-backward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="step-forward" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stethoscope" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sticky-note" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sticky-note-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stop" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stop-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stop-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="street-view" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="strikethrough" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stumbleupon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="stumbleupon-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="subscript" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="subway" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="suitcase" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="sun-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="superpowers" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="superscript" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="support" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="table" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tablet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tachometer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tags" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tasks" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="taxi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="telegram" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="television" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tencent-weibo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="terminal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="text-height" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="text-width" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="th" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="th-large" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="th-list" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="themeisle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-0" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-1" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-2" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-3" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-4" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-empty" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-full" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-half" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-quarter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thermometer-three-quarters" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thumb-tack" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thumbs-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thumbs-o-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thumbs-o-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="thumbs-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="ticket" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="times" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="times-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="times-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="times-rectangle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="times-rectangle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tint" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-left" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-on" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-right" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="toggle-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="trademark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="train" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="transgender" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="transgender-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="trash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="trash-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tree" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="trello" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tripadvisor" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="trophy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="truck" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="try" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tty" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tumblr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tumblr-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="turkish-lira" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="tv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="twitch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="twitter" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="twitter-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="umbrella" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="underline" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="undo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="universal-access" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="university" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="unlink" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="unlock" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="unlock-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="unsorted" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="upload" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="usb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="usd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-circle" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-circle-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-md" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-plus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-secret" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="user-times" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="users" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vcard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vcard-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="venus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="venus-double" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="venus-mars" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="viacoin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="viadeo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="viadeo-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="video-camera" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vimeo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vimeo-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vine" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="vk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="volume-control-phone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="volume-down" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="volume-off" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="volume-up" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="warning" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wechat" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="weibo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="weixin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="whatsapp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wheelchair" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wheelchair-alt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wifi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wikipedia-w" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="window-close" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="window-close-o" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="window-maximize" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="window-minimize" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="window-restore" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="windows" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="won" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wordpress" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wpbeginner" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wpexplorer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wpforms" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="wrench" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="xing" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="xing-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="y-combinator" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="y-combinator-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yahoo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yc-square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yelp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yen" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="yoast" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="youtube" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="youtube-play" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="fa" name="youtube-square" />
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
                  <code>&lt;Icon prefix="flag" name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ad" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ae" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="af" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ag" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ai" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="al" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="am" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ao" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="aq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ar" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="as" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="at" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="au" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="aw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ax" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="az" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ba" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="be" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bj" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="br" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="by" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="bz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ca" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ci" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ck" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="co" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cx" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="cz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="de" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="dj" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="dk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="dm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="do" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="dz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ec" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ee" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="eg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="eh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="er" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="es" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="et" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="eu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fj" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="fr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ga" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gb-eng" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gb-nir" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gb-sct" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gb-wls" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ge" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="gy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="hk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="hm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="hn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="hr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ht" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="hu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="id" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ie" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="il" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="im" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="in" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="io" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="iq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ir" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="is" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="it" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="je" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="jm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="jo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="jp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ke" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ki" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="km" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ky" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="kz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="la" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="li" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ls" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="lv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ly" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ma" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="md" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="me" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ml" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mp" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mq" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ms" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mx" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="my" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="mz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="na" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ne" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ng" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ni" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="no" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="np" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="nz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="om" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pe" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ph" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ps" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="pw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="py" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="qa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="re" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ro" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="rs" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ru" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="rw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sd" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="se" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sh" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="si" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sj" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="so" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ss" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="st" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sx" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="sz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="td" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="th" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tj" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tk" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tl" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="to" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tr" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tv" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tw" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="tz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ua" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ug" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="um" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="un" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="us" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="uy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="uz" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="va" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="vc" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ve" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="vg" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="vi" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="vn" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="vu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="wf" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ws" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="ye" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="yt" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="za" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="zm" />
                    </li>
                    <li className="icons-list-item">
                      <Icon prefix="flag" name="zw" />
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
                  <code>&lt;Icon payment name="ICON_NAME"/&gt;</code>
                </p>
              </Grid.Col>
              <Grid.Col lg={9}>
                <div className="icons-list-wrap">
                  <ul className="icons-list">
                    <li className="icons-list-item">
                      <Icon payment name="2checkout" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="alipay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="amazon" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="americanexpress" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="applepay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bancontact" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bitcoin" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bitpay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="cirrus" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="clickandbuy" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="coinkite" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="dinersclub" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="directdebit" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="discover" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="dwolla" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ebay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="eway" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="giropay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="googlewallet" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ingenico" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="jcb" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="klarna" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="laser" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="maestro" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="mastercard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="monero" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="neteller" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ogone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="okpay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paybox" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paymill" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payoneer" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paypal" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paysafecard" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payu" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payza" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ripple" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="sage" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="sepa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="shopify" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="skrill" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="solo" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="square" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="stripe" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="switch" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ukash" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="unionpay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="verifone" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="verisign" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="visa" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="webmoney" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="westernunion" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="worldpay" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="2checkout-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="alipay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="amazon-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="americanexpress-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="applepay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bancontact-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bitcoin-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="bitpay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="cirrus-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="clickandbuy-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="coinkite-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="dinersclub-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="directdebit-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="discover-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="dwolla-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ebay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="eway-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="giropay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="googlewallet-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ingenico-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="jcb-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="klarna-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="laser-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="maestro-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="mastercard-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="monero-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="neteller-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ogone-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="okpay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paybox-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paymill-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payone-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payoneer-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paypal-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="paysafecard-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payu-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="payza-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ripple-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="sage-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="sepa-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="shopify-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="skrill-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="solo-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="square-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="stripe-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="switch-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="ukash-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="unionpay-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="verifone-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="verisign-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="visa-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="webmoney-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="westernunion-dark" />
                    </li>
                    <li className="icons-list-item">
                      <Icon payment name="worldpay-dark" />
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

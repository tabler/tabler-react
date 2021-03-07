import React from "react";

import { storiesOf } from "@storybook/react";

import Timeline from "./";
import Avatar from "../Avatar";
import examples from "./Timeline.examples.md";
import Media from "../Media";
import Icon from "../Icon";
import Card from "../Card";
import Grid from "../Grid";
import El from "../El";

// @ts-ignore
React.Fragment = ({ children }) => children;

const stories = storiesOf("Timeline", module);

stories.add(
  "Example",
  () => {
    return (
      <Card m={2} p={3}>
        <Timeline>
          <Timeline.Item>
            <Timeline.ItemIcon name="twitter" bg="twitter" />
            <Timeline.ItemContent>
              <Timeline.ItemTime>10 hrs ago</Timeline.ItemTime>
              <Timeline.ItemTitle>+1150 Followers</Timeline.ItemTitle>
              <Timeline.ItemDescription>
                You’re getting more and more followers, keep it up!
              </Timeline.ItemDescription>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="briefcase" bg="red" />
            <Timeline.ItemContent>
              <Timeline.ItemTime>2 hrs ago</Timeline.ItemTime>
              <Timeline.ItemTitle>
                +3 New Products were added!
              </Timeline.ItemTitle>
              <Timeline.ItemDescription>
                Congratulations!
              </Timeline.ItemDescription>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="check" bg="success" />

            <Timeline.ItemContent>
              <Timeline.ItemTime>1 day ago</Timeline.ItemTime>
              <Timeline.ItemTitle>
                Database backup completed!
              </Timeline.ItemTitle>
              <Timeline.ItemDescription>
                Download the <a href="#">latest backup</a>.
              </Timeline.ItemDescription>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="facebook" bg="facebook" />

            <Timeline.ItemContent>
              <Timeline.ItemTime>1 day ago</Timeline.ItemTime>
              <Timeline.ItemTitle>+290 Page Likes</Timeline.ItemTitle>
              <Timeline.ItemDescription>
                This is great, keep it up!
              </Timeline.ItemDescription>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="user-plus" bg="teal" />

            <Timeline.ItemContent>
              <Timeline.ItemTime>2 days ago</Timeline.ItemTime>
              <Timeline.ItemTitle>+3 Friend Requests</Timeline.ItemTitle>
              <Avatar.List mt={3}>
                <Avatar
                  size="sm"
                  status="success"
                  imageURL="/img/avatars/000m.jpg"
                />
                <Avatar
                  size="sm"
                  status="success"
                  imageURL="/img/avatars/001m.jpg"
                />
                <Avatar
                  size="sm"
                  status="success"
                  imageURL="/img/avatars/002m.jpg"
                />
              </Avatar.List>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="image" bg="yellow" />

            <Timeline.ItemContent>
              <Timeline.ItemTime>3 days ago</Timeline.ItemTime>
              <Timeline.ItemTitle>+2 New photos</Timeline.ItemTitle>
              <El.Div mt={3}>
                <Grid.Row className="row-xs">
                  <Grid.Col sm={6}>
                    <Media rounded aspectRatio="2x1">
                      <Media.Content
                        style={{
                          backgroundImage:
                            "url(./img/photos/6d35d9a2bd6c63c2.jpg)",
                        }}
                      />
                    </Media>
                  </Grid.Col>
                  <Grid.Col sm={6}>
                    <Media rounded aspectRatio="2x1">
                      <Media.Content
                        style={{
                          backgroundImage:
                            "url(./img/photos/6f6e2ef709fef97a.jpg)",
                        }}
                      />
                    </Media>
                  </Grid.Col>
                </Grid.Row>
              </El.Div>
            </Timeline.ItemContent>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.ItemIcon name="settings" />
            <Timeline.ItemContent>
              <Timeline.ItemTime>2 weeks ago</Timeline.ItemTime>
              <Timeline.ItemTitle>System updated to v2.02</Timeline.ItemTitle>
              <Timeline.ItemDescription>
                Check the complete changelog at the{" "}
                <a href="#">activity page</a>.
              </Timeline.ItemDescription>
            </Timeline.ItemContent>
          </Timeline.Item>
        </Timeline>
      </Card>
    );
  },
  {
    notes: { markdown: examples },
  }
);

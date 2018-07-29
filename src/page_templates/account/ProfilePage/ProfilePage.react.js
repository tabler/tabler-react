// @flow

import * as React from "react";

import {
  Container,
  Grid,
  Form,
  Profile,
  Card,
  Button,
  Media,
  Avatar,
  List,
  Text,
  ProfileFormCard,
  FormCard,
} from "../../../";
import withTouchedErrors from "../../../helpers/withTouchedErrors.react";

import defaultStrings from "./ProfilePage.strings";
import type { stringTypes } from "./ProfilePage.strings";

type fieldTypes = {|
  email?: string,
  password?: string,
|};

type touchedTypes = {|
  email?: boolean,
  password?: boolean,
|};

type ProfileProps = {|
  name: string,
  backgroundURL?: string,
  avatarURL?: string,
  twitterURL?: string,
  bio?: string,
  jobTitle?: string,
|};

type Props = {|
  +strings?: stringTypes,
  +action?: string,
  +method?: string,
  +onSubmit?: Function,
  +onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  +onBlur?: (SyntheticInputEvent<HTMLInputElement>) => void,
  +values?: fieldTypes,
  +errors?: fieldTypes,
  +touched?: touchedTypes,
  ...ProfileProps,
|};

/**
 * A profile page
 * Can be easily wrapped with form libraries like formik and redux-form
 * @TODO comments, profile social card, form card profile
 */
function ProfilePage(props: Props): React.Node {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
  } = props;

  const {
    name,
    backgroundURL,
    avatarURL,
    twitterURL,
    bio,
    jobTitle = "",
  } = props;

  return (
    <div className="my-3 my-md-5">
      <Container>
        <Grid.Row>
          <Grid.Col lg={4}>
            <Profile
              name={name}
              backgroundURL={backgroundURL}
              avatarURL={avatarURL}
              twitterURL={twitterURL}
              bio={bio}
            />
            <Profile
              layout={2}
              name={name}
              avatarURL={avatarURL}
              twitterURL={twitterURL}
              jobTitle={jobTitle}
            />
            <ProfileFormCard
              values={{
                bio: bio,
              }}
            />
          </Grid.Col>
          <Grid.Col lg={8}>
            <Card>
              <Card.Header>
                <Form.InputGroup
                  append={<Button icon="camera" color="secondary" />}
                >
                  <Form.Input type="text" placeholder="Message" />
                </Form.InputGroup>
              </Card.Header>
              <List.Group className="card-list-group">
                <List.GroupItem className="py-5">
                  <Media>
                    <Media.Object
                      avatar
                      objectURL="demo/faces/male/16.jpg"
                      size="md"
                      className="mr-4"
                    />
                    <Media.Body>
                      <Media.Heading>
                        <small className="float-right text-muted">4 min</small>
                        <h5>Peter Richards</h5>
                      </Media.Heading>
                      <Text>
                        Aenean lacinia bibendum nulla sed consectetur.
                        Vestibulum id ligula porta felis euismod semper. Morbi
                        leo risus, porta ac consectetur ac, vestibulum at eros.
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Vestibulum id ligula porta felis euismod semper.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                      </Text>
                      <Media.List>
                        <Media.ListItem>
                          <Media.Object
                            avatar
                            objectURL="demo/faces/female/17.jpg"
                            className="mr-4"
                          />
                          <Media.Body>
                            <strong>Debra Beck: </strong>
                            Donec id elit non mi porta gravida at eget metus.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Donec ullamcorper nulla non
                            metus auctor fringilla. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et. Sed
                            posuere consectetur est at lobortis.
                          </Media.Body>
                        </Media.ListItem>
                        <Media.ListItem>
                          <Media.Object
                            avatar
                            objectURL="demo/faces/male/32.jpg"
                            className="mr-4"
                          />
                          <Media.Body>
                            <strong>Jack Ruiz: </strong>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fusce dapibus, tellus ac cursus commodo,
                            tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.
                          </Media.Body>
                        </Media.ListItem>
                      </Media.List>
                    </Media.Body>
                  </Media>
                </List.GroupItem>
                <List.GroupItem className="py-5">
                  <Media>
                    <Media.Object
                      avatar
                      size="md"
                      objectURL="demo/faces/male/16.jpg"
                      className="mr-4"
                    />
                    <Media.Body>
                      <Media.Heading>
                        <small className="float-right text-muted">12 min</small>
                        <h5>Peter Richards</h5>
                      </Media.Heading>
                      <Text>
                        Donec id elit non mi porta gravida at eget metus.
                        Integer posuere erat a ante venenatis dapibus posuere
                        velit aliquet. Cum sociis natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Morbi leo
                        risus, porta ac consectetur ac, vestibulum at eros.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </Text>
                    </Media.Body>
                  </Media>
                </List.GroupItem>
                <List.GroupItem className="py-5">
                  <Media>
                    <Media.Object
                      avatar
                      size="md"
                      objectURL="demo/faces/male/16.jpg"
                      className="mr-4"
                    />
                    <Media.Body>
                      <Media.Heading>
                        <small className="float-right text-muted">34 min</small>
                        <h5>Peter Richards</h5>
                      </Media.Heading>
                      <Text>
                        Donec ullamcorper nulla non metus auctor fringilla.
                        Vestibulum id ligula porta felis euismod semper. Aenean
                        eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Etiam porta sem malesuada magna
                        mollis euismod. Donec sed odio dui.
                      </Text>
                      <Media.List>
                        <Media.ListItem>
                          <Media.Object
                            avatar
                            objectURL="demo/faces/male/26.jpg"
                            className="mr-4"
                          />
                          <Media.Body>
                            <strong>Wayne Holland: </strong>
                            Donec id elit non mi porta gravida at eget metus.
                            Vivamus sagittis lacus vel augue laoreet rutrum
                            faucibus dolor auctor. Donec ullamcorper nulla non
                            metus auctor fringilla. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et. Sed
                            posuere consectetur est at lobortis.
                          </Media.Body>
                        </Media.ListItem>
                      </Media.List>
                    </Media.Body>
                  </Media>
                </List.GroupItem>
              </List.Group>
            </Card>

            {/* <FormCard title='Edit Profile'>

                <Grid.Row>
                  <Grid.Col md={5}>
                    <Form.Input
                      label="Company"
                      disabled={true}
                      placeholder="Company"
                      value="Creative Code Inc."
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={3}>
                    <Form.Input
                      label="Username"
                      type="text"
                      placeholder="Username"
                      value="michael23"
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={4}>
                    <Form.Input
                      label="Email address"
                      type="email"
                      placeholder="Email"
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={6}>
                    <Form.Input
                      label="First Name"
                      type="text"
                      placeholder="First Name"
                      value="Chet"
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={6}>
                    <Form.Input
                      label="Last Name"
                      type="text"
                      placeholder="Last Name"
                      value="Faker"
                    />
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <Form.Input
                      label="Address"
                      type="text"
                      placeholder="Home Address"
                      value="Melbourne, Australia"
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={4}>
                    <Form.Input
                      label="City"
                      type="text"
                      placeholder="City"
                      value="Melbourne"
                    />
                  </Grid.Col>
                  <Grid.Col sm={6} md={3}>
                    <Form.Input
                      label="Postal Code"
                      type="number"
                      placeholder="ZIP Code"
                    />
                  </Grid.Col>
                  <Grid.Col md={5}>
                    <Form.Select label="Country">
                      <option>Germany</option>
                    </Form.Select>
                  </Grid.Col>
                  <Grid.Col md={12}>
                    <Form.Textarea
                      rows={5}
                      placeholder="Here can be your description"
                      className="mb=0"
                      label="About Me"
                    >
                      Oh so, your weak rhyme You doubt I'll bother, reading into
                      it I'll probably won't, left to my own devices But that's
                      the difference in our opinions.
                    </Form.Textarea>
                  </Grid.Col>
                </Grid.Row>
              </Card.Body>
              <Card.Footer className="text-right">
                <Button type="submit" color="primary">
                  Update Profile
                </Button>
              </Card.Footer>
            </FormCard> */}
          </Grid.Col>
        </Grid.Row>
      </Container>
    </div>
  );
}

const ProfilePageWithTouchedErrors: React.ComponentType<
  Props
> = withTouchedErrors(["email", "password"])(ProfilePage);

export default ProfilePageWithTouchedErrors;

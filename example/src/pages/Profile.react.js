// @flow

import React from "react";

import {
  Container,
  Grid,
  Card,
  Header,
  Button,
  Icon,
  Form,
  Avatar,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function Profile() {
  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>
          <Grid.Row>
            <Grid.Col lg={4}>
              <Card.Profile
                name="Peter Richards"
                backgroundURL="demo/photos/eberhard-grossgasteiger-311213-500.jpg"
                avatarURL="demo/faces/male/16.jpg"
                twitterURL="test"
              >
                Big belly rude boy, million dollar hustler. Unemployed.
              </Card.Profile>
              <Card>
                <Card.Body>
                  <Card.Media
                    name="Juan Hernandez"
                    workTitle="Webdeveloper"
                    avatarURL="demo/faces/male/21.jpg"
                    facebook="Facebook"
                    twitter="Twitter"
                    phone="1234567890"
                    skype="@skypename"
                  />
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>
                  <Card.Title>My Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Grid.Row>
                      <Grid.Col auto>
                        <Avatar size="xl" imageURL="demo/faces/female/9.jpg" />
                      </Grid.Col>
                      <Grid.Col>
                        <Form.Group>
                          <Form.Label>Email-Address</Form.Label>
                          <Form.Input placeholder="your-email@domain.com" />
                        </Form.Group>
                      </Grid.Col>
                    </Grid.Row>
                    <Form.Group>
                      <Form.Label>Bio</Form.Label>
                      <Form.Textarea rows="5">
                        Big belly rude boy, million dollar hustler. Unemployed.
                      </Form.Textarea>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Email-Address</Form.Label>
                      <Form.Input placeholder="your-email@domain.com" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Input type="password" value="Password" />
                    </Form.Group>
                    <Form.Footer>
                      <Button color="primary" block>
                        Save
                      </Button>
                    </Form.Footer>
                  </Form>
                </Card.Body>
              </Card>
            </Grid.Col>
            {/* <div className="col-lg-8">
            <div className="card">
              <div className="card-header">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Message" />
                  <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">
                      <i className="fe fe-camera"></i>
                    </button>
                  </div>
                </div>
              </div>
              <ul className="list-group card-list-group">
                <li className="list-group-item py-5">
                  <div className="media">
                    <div className="media-object avatar avatar-md mr-4"
                      // style="background-image: url(demo/faces/male/16.jpg)"
                      ></div>
                    <div className="media-body">
                      <div className="media-heading">
                        <small className="float-right text-muted">4 min</small>
                        <h5>Peter Richards</h5>
                      </div>
                      <div>
                        Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                      </div>
                      <ul className="media-list">
                        <li className="media mt-4">
                          <div className="media-object avatar mr-4"
                             // style="background-image:url(demo/faces/female/17.jpg)"
                             ></div>
                          <div className="media-body">
                            <strong>Debra Beck: </strong>
                            Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                            auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                          </div>
                        </li>
                        <li className="media mt-4">
                          <div className="media-object avatar mr-4"
                            // style="background-image: url(demo/faces/male/32.jpg)"
                            ></div>
                          <div className="media-body">
                            <strong>Jack Ruiz: </strong>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                            amet risus.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-5">
                  <div className="media">
                    <div className="media-object avatar avatar-md mr-4"
                      // style="background-image: url(demo/faces/male/16.jpg)"
                      ></div>
                    <div className="media-body">
                      <div className="media-heading">
                        <small className="float-right text-muted">12 min</small>
                        <h5>Peter Richards</h5>
                      </div>
                      <div>
                        Donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item py-5">
                  <div className="media">
                    <div className="media-object avatar avatar-md mr-4"
                      // style="background-image: url(demo/faces/male/16.jpg)"
                      ></div>
                    <div className="media-body">
                      <div className="media-heading">
                        <small className="float-right text-muted">34 min</small>
                        <h5>Peter Richards</h5>
                      </div>
                      <div>
                        Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
                      </div>
                      <ul className="media-list">
                        <li className="media mt-4">
                          <div className="media-object avatar mr-4"
                            // style="background-image: url(demo/faces/male/26.jpg)"
                            ></div>
                          <div className="media-body">
                            <strong>Wayne Holland: </strong>
                            Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus
                            auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <form className="card">
              <div className="card-body">
                <h3 className="card-title">Edit Profile</h3>
                <div className="row">
                  <div className="col-md-5">
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input type="text" className="form-control" disabled="" placeholder="Company" value="Creative Code Inc." />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" placeholder="Username" value="michael23" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="Company" value="Chet" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" value="Faker" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" placeholder="Home Address" value="Melbourne, Australia" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" placeholder="City" value="Melbourne" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="form-group">
                      <label className="form-label">Postal Code</label>
                      <input type="number" className="form-control" placeholder="ZIP Code" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="form-control custom-select">
                        <option value="">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <label className="form-label">About Me</label>
                      <textarea rows="5" className="form-control" placeholder="Here can be your description" value="Mike">Oh so, your weak rhyme
You doubt I'll bother, reading into it
I'll probably won't, left to my own devices
But that's the difference in our opinions.</textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div> */}
          </Grid.Row>
        </Container>
      </div>
    </SiteWrapper>
  );
}

export default Profile;

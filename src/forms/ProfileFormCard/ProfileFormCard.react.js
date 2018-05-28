// @flow

import * as React from "react";

import Form from "../../components/Form";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Grid from "../../components/Grid";
import Avatar from "../../components/Avatar";

import defaultStrings from "./ProfileFormCard.strings";
import type { stringTypes } from "./ProfileFormCard.strings";

import withTouchedErrors from "../../helpers/withTouchedErrors.react";

type fieldTypes = {|
  name?: string,
  bio?: string,
  email?: string,
  password?: string,
|};

type touchedTypes = {|
  name?: boolean,
  bio?: boolean,
  email?: boolean,
  password?: boolean,
|};

export type Props = {|
  +strings?: stringTypes,
  +action?: string,
  +method?: string,
  +onSubmit?: Function,
  +onChange?: (
    SyntheticInputEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void,
  +onBlur?: (
    SyntheticInputEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void,
  +values?: fieldTypes,
  +errors?: fieldTypes,
  +touched?: touchedTypes,
  +avatarURL?: string,
|};

function ProfileFormCard(props: Props): React.Node {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    errors,
    avatarURL,
  } = props;

  const strings: stringTypes = Object.assign({}, defaultStrings, props.strings);

  return (
    <Card>
      <Card.Header>
        <Card.Title>{strings.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form action={action} method={method} onSubmit={onSubmit}>
          <Grid.Row>
            <Grid.Col auto>
              <Avatar size="xl" imageURL={avatarURL} />
            </Grid.Col>
            <Grid.Col>
              <Form.Group>
                <Form.Label>{strings.nameLabel}</Form.Label>
                <Form.Input
                  name="name"
                  placeholder={strings.namePlaceholder}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={values && values.name}
                  error={errors && errors.name}
                />
              </Form.Group>
            </Grid.Col>
          </Grid.Row>
          <Form.Group>
            <Form.Label>{strings.bioLabel}</Form.Label>
            <Form.Textarea
              rows={5}
              name="bio"
              placeholder={strings.bioPlaceholder}
              onChange={onChange}
              onBlur={onBlur}
              value={values && values.bio}
              error={errors && errors.bio}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{strings.emailLabel}</Form.Label>
            <Form.Input
              name="email"
              placeholder={strings.emailPlaceholder}
              onChange={onChange}
              onBlur={onBlur}
              value={values && values.email}
              error={errors && errors.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>{strings.passwordLabel}</Form.Label>
            <Form.Input
              type="password"
              name="password"
              placeholder={strings.passwordPlaceholder}
              onChange={onChange}
              onBlur={onBlur}
              value={values && values.password}
              error={errors && errors.password}
            />
          </Form.Group>
          <Form.Footer>
            <Button type="submit" color="primary" block>
              {strings.buttonText}
            </Button>
          </Form.Footer>
        </Form>
      </Card.Body>
    </Card>
  );
}
const ProfileFormCardWithTouchedErrors: React.ComponentType<
  Props
> = withTouchedErrors(["name", "bio", "email", "password"])(ProfileFormCard);

export default ProfileFormCardWithTouchedErrors;

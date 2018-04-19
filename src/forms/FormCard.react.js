// @flow

import * as React from "react";

import Form from "../components/Form";
import Card from "../components/Card";
import Button from "../components/Button";

type Props = {|
  +action: string,
  +children?: React.Node,
  +method: string,
  +title: string,
  +buttonText: string,
|};

function FormCard(props: Props): React.Node {
  return (
    <Form className="card">
      <Card.Body className="p-6">
        <Card.Title RootComponent="div">{props.title}</Card.Title>
        {props.children}
        <Form.Footer>
          <Button color="primary" block={true}>
            {props.buttonText}
          </Button>
        </Form.Footer>
      </Card.Body>
    </Form>
  );
}

export default FormCard;

// @flow

import * as React from "react";

import Form from "../components/Form";
import Card from "../components/Card";
import Button from "../components/Button";

type Props = {|
  +action?: string,
  +children?: React.Node,
  +method?: string,
  +title: string,
  +buttonText: string,
  +onSubmit?: Function,
|};

function FormCard({
  children,
  action,
  method,
  onSubmit,
  title,
  buttonText,
}: Props): React.Node {
  return (
    <Form className="card" onSubmit={onSubmit} action={action} method={method}>
      <Card.Body className="p-6">
        <Card.Title RootComponent="div">{title}</Card.Title>
        {children}
        <Form.Footer>
          <Button type="submit" color="primary" block={true}>
            {buttonText}
          </Button>
        </Form.Footer>
      </Card.Body>
    </Form>
  );
}

export default FormCard;

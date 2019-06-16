import * as React from "react";

import Form from "../components/Form";
import Card from "../components/Card";
import Button from "../components/Button";
import { HTMLElementProps } from "../types";

interface Props extends HTMLElementProps<HTMLFormElement> {
  action?: string;
  children?: React.ReactNode;
  method?: string;
  title: string;
  buttonText: string;
}

function FormCard({
  children,
  action,
  method,
  onSubmit,
  title,
  buttonText,
}: Props) {
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

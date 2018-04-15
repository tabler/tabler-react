// @flow

import * as React from "react";

import { Form, FormTextInput, StandaloneFormPage } from 'tabler-react';

type Props = {||};

function ForgotPasswordPage(props: Props): React.Node {
  return (
    <StandaloneFormPage>
      <Form action="" method="get" title="Forgot Password">
        <p className="text-muted">
          Enter your email address and your password will be reset and emailed
          to you.
        </p>
        <FormTextInput label="Email Address" placeHolder="Enter email" />
      </Form>
    </StandaloneFormPage>
  );
}

export default ForgotPasswordPage;

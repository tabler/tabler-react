// @flow

import * as React from "react";

import { Form, FormTextInput, StandaloneFormPage } from "tabler-react";

type Props = {||};

function LoginPage(props: Props): React.Node {
  return (
    <StandaloneFormPage>
      <Form action="" method="get" title="Login to your Account">
        <FormTextInput label="Email Address" placeHolder="Enter email" />
        <FormTextInput
          type="password"
          label="Password"
          placeHolder="Password"
        />
      </Form>
    </StandaloneFormPage>
  );
}

export default LoginPage;

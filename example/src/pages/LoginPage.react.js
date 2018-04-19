// @flow

import * as React from "react";

import { FormCard, FormTextInput, StandaloneFormPage } from "tabler-react";

type Props = {||};

function LoginPage(props: Props): React.Node {
  return (
    <StandaloneFormPage>
      <FormCard
        action=""
        buttonText="Login"
        method="get"
        title="Login to your Account"
      >
        <FormTextInput label="Email Address" placeHolder="Enter email" />
        <FormTextInput
          type="password"
          label="Password"
          placeHolder="Password"
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

export default LoginPage;

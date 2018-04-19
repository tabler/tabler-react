// @flow

import * as React from "react";

import {
  FormCard,
  FormTextInput,
  FormCheckboxInput,
  StandaloneFormPage,
} from "tabler-react";

type Props = {||};

function RegisterPage(props: Props): React.Node {
  return (
    <StandaloneFormPage>
      <FormCard
        action=""
        buttonText="Create Account"
        method="get"
        title="Create New Account"
      >
        <FormTextInput label="Name" placeHolder="Enter name" />
        <FormTextInput label="Email Address" placeHolder="Enter email" />
        <FormTextInput
          type="password"
          label="Password"
          placeHolder="Password"
        />
        <FormCheckboxInput label="Agree to the terms and policy" />
      </FormCard>
    </StandaloneFormPage>
  );
}

export default RegisterPage;

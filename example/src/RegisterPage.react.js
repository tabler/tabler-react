// @flow

import * as React from "react";

import {
  Form,
  FormTextInput,
  FormCheckboxInput,
  StandaloneFormPage,
} from "tabler-react";

type Props = {||};

function RegisterPage(props: Props): React.Node {
  return (
    <StandaloneFormPage>
      <Form
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
      </Form>
    </StandaloneFormPage>
  );
}

export default RegisterPage;

// @flow

import * as React from "react";

import { FormCard, FormTextInput, StandaloneFormPage } from "../../../";
import withTouchedErrors from "../../../helpers/withTouchedErrors.react";

import defaultStrings from "./ForgotPasswordPage.strings";
import type { stringTypes } from "./ForgotPasswordPage.strings";
import type { FormEvents, FocusEvents } from "../../../";

type fieldTypes = {|
  email?: string,
|};

type touchedTypes = {|
  email?: boolean,
|};

type Props = {|
  ...FormEvents,
  ...FocusEvents,
  +strings?: stringTypes,
  +action?: string,
  +method?: string,
  +values?: fieldTypes,
  +errors?: fieldTypes,
  +touched?: touchedTypes,
|};

/**
 * A forgot password page
 * Can be easily wrapped with form libraries like formik and redux-form
 */
function ForgotPasswordPage(props: Props): React.Node {
  const {
    action,
    method,
    onSubmit,
    onChange,
    onBlur,
    values,
    strings = {},
    errors,
  } = props;

  return (
    <StandaloneFormPage imageURL={"./demo/logo.svg"}>
      <FormCard
        buttonText={strings.buttonText || defaultStrings.buttonText}
        title={strings.title || defaultStrings.title}
        onSubmit={onSubmit}
        action={action}
        method={method}
      >
        <p className="text-muted">
          {strings.instructions || defaultStrings.instructions}
        </p>
        <FormTextInput
          name="email"
          label={strings.emailLabel || defaultStrings.emailLabel}
          placeholder={
            strings.emailPlaceholder || defaultStrings.emailPlaceholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={values && values.email}
          error={errors && errors.email}
        />
      </FormCard>
    </StandaloneFormPage>
  );
}

const ForgotPasswordPageWithTouchedErrors: React.ComponentType<Props> = withTouchedErrors(
  ["email"]
)(ForgotPasswordPage);

export default ForgotPasswordPageWithTouchedErrors;

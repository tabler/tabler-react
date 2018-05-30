// @flow

import * as React from "react";

/**
 * Returns an object of fields with values set based on the touched and error values
 * If a value is both touched and has a non-empty error string it is returned as the fields value
 */
function touchedErrors(
  touched: { [string]: boolean } = {},
  errors: { [string]: string } = {},
  fields: Array<string> = []
): { [string]: string } {
  return fields.reduce(
    (acc, cur) =>
      Object.assign(acc, {
        [cur]: touched && touched[cur] && errors ? errors[cur] : "",
      }),
    {}
  );
}

/**
 * A HOC that modifies the errors propso that it only returns errors if the the field
 * has also been touched
 * First takes an array of the field names, followed by the component
 */
function withTouchedErrors(fields: Array<string> = []) {
  return function withComponent<A: { +touched?: *, +errors?: * }>(
    Component: React.ComponentType<A>
  ): React.ComponentType<A> {
    return function WithTouchedErrors(props: A) {
      const errors = touchedErrors(props.touched, props.errors, fields);
      return <Component {...props} errors={errors} />;
    };
  };
}

export default withTouchedErrors;

// @flow

import * as React from "react";

import Form from "../components/Form";

import type { Props as FormInputProps } from "../components/Form/FormInput.react";

type Props = {|
  ...FormInputProps,
  +label?: string,
|};

type State = {|
  value: string | number,
|};

class FormTextInput extends React.PureComponent<Props, State> {
  render(): React.Node {
    const { label, ...props } = this.props;

    const formInputComponent = React.createElement(Form.Input, props);

    return <Form.Group label={label}>{formInputComponent}</Form.Group>;
  }
}

/*

<input
  className="form-control"
  onChange={this._handleChange}
  placeholder={placeHolder}
  type={type}
  value={value}
/>

*/

export default FormTextInput;

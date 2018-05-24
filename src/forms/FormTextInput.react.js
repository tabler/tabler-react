// @flow

import * as React from "react";

import Form from "../components/Form";

type Props = {|
  +type?: "checkbox" | "text" | "email" | "password",
  +label: string,
  +placeHolder: string,
  +onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  +onBlur?: (SyntheticInputEvent<HTMLInputElement>) => void,
|};

type State = {|
  value: string | number,
|};

class FormTextInput extends React.PureComponent<Props, State> {
  state = {
    value: "",
  };

  _handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  render(): React.Node {
    const type = this.props.type || "text";
    const { label, placeHolder, onChange, onBlur } = this.props;
    const { value } = this.state;
    return (
      <Form.Group label={label}>
        <Form.Input
          onChange={onChange || this._handleChange}
          onBlur={onBlur}
          placeholder={placeHolder}
          type={type}
          value={value}
        />
      </Form.Group>
    );
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

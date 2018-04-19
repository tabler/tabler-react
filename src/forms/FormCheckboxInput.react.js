// @flow

import * as React from "react";

import Form from "../components/Form";

type Props = {|
  +label: string,
|};

type State = {
  value: boolean,
};

class FormCheckboxInput extends React.PureComponent<Props, State> {
  state = {
    value: false,
  };

  _handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState((prevState, _) => ({
      value: !prevState.value,
    }));
  };

  render(): React.Node {
    const { label } = this.props;
    const { value } = this.state;
    return (
      <Form.Group>
        <label className="custom-control custom-checkbox">
          <Form.Input
            type="checkbox"
            className="custom-control-input"
            onChange={this._handleChange}
            value={value}
          />
          <span className="custom-control-label">{label}</span>
        </label>
      </Form.Group>
    );
  }
}

export default FormCheckboxInput;

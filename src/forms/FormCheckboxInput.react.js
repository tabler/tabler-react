// @flow

import * as React from "react";

type Props = {|
  +label: string
|};

type State = {
  value: boolean
};

class FormCheckboxInput extends React.PureComponent<Props, State> {
  state = {
    value: false
  };

  _handleChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    this.setState((prevState, _) => ({
      value: !prevState.value
    }));
  };

  render(): React.Node {
    const { label } = this.props;
    const { value } = this.state;
    return (
      <div className="form-group">
        <label className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            onChange={this._handleChange}
            checked={value}
          />
          <span className="custom-control-label">{label}</span>
        </label>
      </div>
    );
  }
}

export default FormCheckboxInput;

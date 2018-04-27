// @flow

import * as React from "react";
import cn from "classnames";

type Props = {|
  +className?: string,
  +value?: string | number | boolean,
  +name?: string,
  +label?: string,
  +disabled?: boolean,
  +readOnly?: boolean,
  +onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => void,
|};

type State = {| fileName: string |};

class FormFileInput extends React.Component<Props, State> {
  state = {
    fileName: "",
  };

  _handleOnChange = (event: SyntheticInputEvent<HTMLInputElement>): void => {
    console.log(event.target.files);
    this.setState({ fileName: event.target.files[0].name });
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render(): React.Node {
    const {
      className,
      value,
      name,
      label: labelFromProps = "Choose file",
      disabled,
      readOnly,
    } = this.props;

    const classes = cn("custom-file", className);
    const label = this.state.fileName || labelFromProps;
    return (
      <div className={classes}>
        <input
          type="file"
          className="custom-file-input"
          name={name}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          onChange={this._handleOnChange}
        />
        <label
          className="custom-file-label"
          style={{
            whiteSpace: "nowrap",
            display: "block",
            overflow: "hidden",
          }}
        >
          {label}
        </label>
      </div>
    );
  }
}

FormFileInput.displayName = "Form.FileInput";

export default FormFileInput;

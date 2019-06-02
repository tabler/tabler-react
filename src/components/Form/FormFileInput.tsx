import * as React from "react";
import cn from "classnames";

import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "../../";

interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
  className?: string;
  value?: string | number;
  name?: string;
  label?: string;
  disabled?: boolean;
  readOnly?: boolean;
  accept?: string;
}

type State = { fileName: string };

class FormFileInput extends React.Component<Props, State> {
  state = {
    fileName: "",
  };

  _handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files) {
      this.setState({ fileName: event.target.files[0].name });
    }
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };

  render() {
    const {
      className,
      value,
      name,
      label: labelFromProps = "Choose file",
      disabled,
      readOnly,
      onClick,
      onMouseEnter,
      onMouseLeave,
      onPointerEnter,
      onPointerLeave,
      onFocus,
      onBlur,
      accept,
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
          onClick={onClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onFocus={onFocus}
          onBlur={onBlur}
          accept={accept}
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

(FormFileInput as any).displayName = "Form.FileInput";

export default FormFileInput;

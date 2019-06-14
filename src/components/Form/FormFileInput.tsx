import React, { InputHTMLAttributes, useState } from "react";
import cn from "classnames";

export interface FormFileInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const FormFileInput = function({
  onChange,
  className,
  label: labelFromProps = "Choose file",
  ...rest
}: FormFileInputProps) {
  const [fileName, setFileName] = useState("");

  const _handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      setFileName(event.target.files[0].name);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const classes = cn("custom-file", className);
  const label = fileName || labelFromProps;
  return (
    <div className={classes}>
      <input
        type="file"
        className="custom-file-input"
        onChange={_handleOnChange}
        {...rest}
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
};

export default FormFileInput;

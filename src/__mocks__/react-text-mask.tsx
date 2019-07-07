import React from "react";
import { MaskedInputProps } from "react-text-mask";

export default function mock(props: MaskedInputProps) {
  const { render, ...otherProps } = props;

  function setRef() {}

  return props.render ? (
    props.render(setRef, { ...otherProps })
  ) : (
    <input {...otherProps} />
  );
}

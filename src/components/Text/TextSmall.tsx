import * as React from "react";
import Text, { TextProps } from "./Text";

export interface TextSmallProps extends TextProps {}

const TextSmall = ({ children, ...rest }: TextSmallProps) => {
  return (
    <Text as="small" size="sm" {...rest}>
      {children}
    </Text>
  );
};

export default TextSmall;

import * as React from "react";
import Text from "./Text";

type Props = {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  wrap?: boolean;
  muted?: boolean;
};

const TextSmall = ({ className, children, color = "", wrap, muted }: Props) => {
  return (
    <Text
      RootComponent="small"
      color={color}
      size="sm"
      wrap={wrap}
      className={className}
      muted={muted}
    >
      {children}
    </Text>
  );
};



export default TextSmall;

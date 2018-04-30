// @flow

import * as React from "react";
import Text from "./";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +color?: string,
  +wrap?: boolean,
  +muted?: boolean,
|};

const TextSmall = ({
  className,
  children,
  color = "",
  wrap,
  muted,
}: Props): React.Node => {
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

TextSmall.displayName = "Text.Small";

export default TextSmall;

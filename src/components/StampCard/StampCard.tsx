import * as React from "react";
import cn from "classnames";

import Card from "../Card";
import Text from "../Text";
import Header from "../Header";
import Stamp from "../Stamp";
import { colors } from "../../colors";

type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  color?: colors;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

function StampCard({
  children,
  className,
  icon,
  color,
  header,
  footer,
}: Props) {
  const classes = cn(className);
  return (
    <Card className={classes}>
      <div className="p-3 d-flex align-items-center">
        <Stamp color={color} icon={icon} mr={3} />
        <div>
          {header && (
            <Header size={3} m={0}>
              {header}
            </Header>
          )}
          {children}
          {footer && <Text.Small muted>{footer}</Text.Small>}
        </div>
      </div>
    </Card>
  );
}

export default StampCard;

import * as React from "react";
import cn from "classnames";
import { Card, Stamp, Header, Text } from "..";

type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  color?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

function StampCard({
  children,
  className,
  icon,
  color = "",
  header,
  footer,
}: Props) {
  const classes = cn("p-3", className);
  return (
    <Card className={classes}>
      <div className="d-flex align-items-center">
        <Stamp color={color} icon={icon} className="mr-3" />
        <div>
          {header && (
            <Header size={4} className="m-0">
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

StampCard.displayName = "StampCard";

export default StampCard;

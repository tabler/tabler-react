// @flow

import * as React from "react";
import cn from "classnames";
import { Card, Header, Progress } from "../";

type Props = {|
  +className?: string,
  +header?: React.Node,
  +content?: React.Node,
  +progressColor?: string,
  +progressWidth?: number,
|};

function ProgressCard({
  className,
  header,
  content,
  progressColor,
  progressWidth,
}: Props): React.Node {
  const classes = cn(className);
  return (
    <Card className={classes}>
      <Card.Body className="text-center">
        <Header size={5}>{header}</Header>
        <div className="display-4 font-weight-bold mb-4">{content}</div>
        <Progress size="sm">
          <Progress.Bar color={progressColor} width={progressWidth} />
        </Progress>
      </Card.Body>
    </Card>
  );
}

ProgressCard.displayName = "ProgressCard";

export default ProgressCard;

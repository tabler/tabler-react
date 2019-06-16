import * as React from "react";
import cn from "classnames";

import Card from "../Card";
import Progress from "../Progress";
import Header from "../Header";
import { colors } from "../../colors";

type Props = {
  className?: string;
  header?: React.ReactNode;
  content?: React.ReactNode;
  progressColor?: colors;
  progressWidth?: number;
};

function ProgressCard({
  className,
  header,
  content,
  progressColor,
  progressWidth,
}: Props) {
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

export default ProgressCard;

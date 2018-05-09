// @flow

import * as React from "react";
import cn from "classnames";

import { Card, Text, Header, Icon } from "../";

type Props = {|
  +className?: string,
  /**
   * The % amount by which your total has increased
   */
  +movement: number,
  /**
   * The main number displayed within the Card
   */
  +total: string,
  /**
   * The text label displayed within the Card
   */
  +label: string,
  /**
   * The layout to render
   */
  +layout?: 1 | 2,
  /**
   * A Chart to be included at the bottom of layout 2
   */
  +chart?: React.Node,
|};

/**
 * Used for dispaying an individual statistic/number with 2 potential layouts
 */
function StatsCard({
  className,
  movement,
  total,
  label,
  layout = 1,
  chart,
}: Props): React.Node {
  const classes = cn(className);
  const movementString = `${movement > 0 ? "+" : ""}${movement}%`;
  const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";
  if (layout === 2) {
    return (
      <Card className={classes}>
        <Card.Body>
          <div className={`card-value float-right text-${movementColor}`}>
            {movementString}
          </div>
          <Header.H3 className="mb-1">{total}</Header.H3>
          <Text muted>{label}</Text>
        </Card.Body>
        {chart && <div className="card-chart-bg">{chart}</div>}
      </Card>
    );
  }

  return (
    <Card className={classes}>
      <Card.Body className="p-3 text-center">
        <Text color={movementColor} className="text-right">
          {movementString}
          <Icon
            name={
              !movement ? "minus" : movement > 0 ? "chevron-up" : "chevron-down"
            }
          />
        </Text>
        <Header className="m-0">{total}</Header>
        <Text color="muted" className=" mb-4">
          {label}
        </Text>
      </Card.Body>
    </Card>
  );
}

StatsCard.displayName = "StatsCard";

export default StatsCard;

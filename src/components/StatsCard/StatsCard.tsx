import * as React from "react";
import cn from "classnames";

import Card from "../Card";
import Text from "../Text";
import Header from "../Header";
import Icon from "../Icon";
import El from "../El/El";
import Progress from "../Progress";
import { colors } from "../../colors";

export interface StatsCardProps {
  children?: React.ReactNode;
  className?: string;
  /**
   * The % amount by which your total has increased
   */
  movement: number;
  movementLabel?: string;
  /**
   * The main number displayed within the Card
   */
  total: string;
  /**
   * The text label displayed within the Card
   */
  label: string;
  /**
   * The layout to render
   */
  layout?: 1 | 2 | 3 | 4;
  /**
   * A Chart to be included at the bottom of layout 2
   */
  chart?: React.ReactNode;
  progressColor?: colors;
  progressWidth?: number;
  chartWrapperRef?: React.Ref<any>;
  actions?: React.ReactNode;
}

/**
 * Used for dispaying an individual statistic/number with different potential layouts
 */
function StatsCard({
  children,
  className,
  movement,
  movementLabel,
  total,
  label,
  layout = 1,
  chart,
  progressWidth,
  progressColor = "primary",
  actions,
}: StatsCardProps) {
  const classes = cn(className);
  const movementString = `${movement > 0 ? "+" : ""}${movement}%`;
  const movementColor = !movement ? "yellow" : movement > 0 ? "green" : "red";

  if (layout === 3 || layout === 4) {
    return (
      <Card className={classes}>
        <Card.Body>
          <El.Div d="flex">
            <div>{label}</div>
            {actions && <El.Div ms="auto">{actions}</El.Div>}
          </El.Div>
          <El.Div
            d="flex"
            mb={layout === 3 ? 3 : 0}
            className="align-items-baseline"
          >
            <Header mb={0} me={2}>
              {total}
            </Header>
            {layout === 4 && (
              <El.Div me="auto" className={`text-${movementColor}`}>
                {movementString}{" "}
                <Icon
                  name={
                    !movement
                      ? "minus"
                      : movement > 0
                      ? "trending-up"
                      : "trending-down"
                  }
                  thin
                />
              </El.Div>
            )}
          </El.Div>

          {layout === 3 && (
            <React.Fragment>
              <El.Div d="flex" mb={2}>
                <div>{movementLabel}</div>
                <El.Div ms="auto" className={`text-${movementColor}`}>
                  {movementString}{" "}
                  <Icon
                    name={
                      !movement
                        ? "minus"
                        : movement > 0
                        ? "trending-up"
                        : "trending-down"
                    }
                    thin
                  />
                </El.Div>
              </El.Div>

              {typeof progressWidth !== "undefined" && (
                <Progress size="sm">
                  <Progress.Bar color={progressColor} width={progressWidth} />
                </Progress>
              )}
            </React.Fragment>
          )}
          {children}
        </Card.Body>
        {chart && <div className="card-chart">{chart}</div>}
      </Card>
    );
  }

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
        <Text color="gray" className=" mb-4">
          {label}
        </Text>
      </Card.Body>
    </Card>
  );
}

export default StatsCard;

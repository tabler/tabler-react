// @flow

import * as React from "react";
import cn from "classnames";
import { Tooltip as BSTooltip, OverlayTrigger } from "react-bootstrap";

type Props = {|
  +content: string,
  +children: React.Node,
  +className?: string,
|};

function TablerTooltip({ content, children, className }: Props): React.Node {
  const classes = cn("bs-tooltip-top show", className);

  const tooltip = (
    <BSTooltip id={content} className={classes} delayHide={0}>
      <div className="arrow" style={{ left: 30 + "%" }} />
      {content}
    </BSTooltip>
  );

  return (
    <OverlayTrigger placement="top" overlay={tooltip}>
      {children}
    </OverlayTrigger>
  );
}

export default TablerTooltip;

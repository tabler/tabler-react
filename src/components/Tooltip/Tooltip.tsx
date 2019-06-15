import React, { useState } from "react";
import cn from "classnames";
import { Manager, Reference, Popper } from "react-popper";
import { PopperChildrenProps, ReferenceChildrenProps } from "react-popper";
import "./Tooltip.css";

export interface TooltipProps {
  /**
   * The reference element which the Tooltip will be based on.
   */
  children?: React.ReactElement<any>;
  /**
   * Any additional classNames for the Tooltip.
   */
  className?: string;
  /**
   * This is the text content of the Tooltip.
   */
  content: string;
  /**
   * This is the placement of the Tooltip (top, bottom, left, right).
   */
  placement?: any;
  type?: "link";
}

const Tooltip = function({
  className,
  children,
  placement,
  content,
}: TooltipProps) {
  const [isShown, setIsShown] = useState(false);

  const _handleTriggerOnMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShown(true);
  };

  const _handleTriggerOnMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsShown(false);
  };

  const classes = cn(
    "tooltip",
    placement && "bs-tooltip-" + placement,
    "show",
    className
  );

  const arrowClasses = cn(
    "arrow",
    placement === "top" || placement === "bottom"
      ? "tbr-arrow-vertical"
      : "tbr-arrow-horizontal"
  );

  return (
    <Manager>
      <Reference>
        {({ ref }: ReferenceChildrenProps) =>
          typeof children !== "undefined" &&
          React.cloneElement(children, {
            ref: ref,
            onMouseEnter: _handleTriggerOnMouseEnter,
            onMouseLeave: _handleTriggerOnMouseLeave,
          })
        }
      </Reference>
      {isShown && (
        <Popper placement={placement}>
          {({ ref, style, placement }: PopperChildrenProps) => {
            return (
              <div
                className={classes}
                data-placement={placement}
                style={style}
                ref={ref}
              >
                <div className={arrowClasses} />
                <div className="tooltip-inner">{content}</div>
              </div>
            );
          }}
        </Popper>
      )}
    </Manager>
  );
};

export default Tooltip;

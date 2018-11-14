// @flow

import * as React from "react";
import cn from "classnames";
import { Manager, Reference, Popper } from "react-popper";
import type {
  Placement,
  PopperChildrenProps,
  ReferenceChildrenProps,
} from "react-popper";
import "./Tooltip.css";

type Props = {|
  /**
   * The reference element which the Tooltip will be based on.
   */
  +children?: React.Element<any>,
  /**
   * Any additional classNames for the Tooltip.
   */
  +className?: string,
  /**
   * This is the text content of the Tooltip.
   */
  +content: string,
  /**
   * This is the placement of the Tooltip (top, bottom, left, right).
   */
  +placement?: Placement,
  +type?: "link",
|};

type State = {
  isShown: boolean,
};

class Tooltip extends React.Component<Props, State> {
  state = { isShown: false };

  _handleTriggerOnMouseEnter = (e: SyntheticMouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isShown: true });
  };

  _handleTriggerOnMouseLeave = (e: SyntheticMouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState({ isShown: false });
  };

  render(): React.Node {
    const { className, children, placement, content } = this.props;

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
              onMouseEnter: this._handleTriggerOnMouseEnter,
              onMouseLeave: this._handleTriggerOnMouseLeave,
            })
          }
        </Reference>
        {this.state.isShown && (
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
  }
}

export default Tooltip;

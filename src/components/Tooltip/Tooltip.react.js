// @flow

import * as React from "react";
import cn from "classnames";
import { Manager, Placement, Reference, Popper } from "react-popper";
import type { PopperChildrenProps, ReferenceChildrenProps } from "react-popper";
// import styles from "./Tooltip.css";

type Props = {|
  +content: string,
  +children?: React.Node,
  +className?: string,
  +placement?: Placement,
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
      {
        show: this.state.isShown,
      },
      className
    );

    const arrowClasses = cn(
      "arrow"
      // placement === "top" || placement === "bottom"
      //   ? styles["tbr-arrow-vertical"]
      //   : styles["tbr-arrow-horizontal"]
    );

    return (
      <Manager>
        <Reference>
          {({ ref }: ReferenceChildrenProps) => (
            <div
              ref={ref}
              onMouseEnter={this._handleTriggerOnMouseEnter}
              onMouseLeave={this._handleTriggerOnMouseLeave}
            >
              {children}
            </div>
          )}
        </Reference>
        {this.state.isShown && (
          <Popper placement={placement} eventsEnabled={true}>
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

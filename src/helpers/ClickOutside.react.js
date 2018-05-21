// @flow

import * as React from "react";

type Props = {|
  +children: ({| +setElementRef: (el: ?HTMLElement) => mixed |}) => React.Node,
  +onOutsideClick: () => void,
|};

/**
 * A helper to help you do something when a user clicks outside of a component
 */
class ClickOutside extends React.PureComponent<Props, void> {
  elementRef: ?HTMLElement;

  componentDidMount = (): void => {
    document.addEventListener("mousedown", this.handleOutsideOnClick, false);
  };

  componentWillUnmount = (): void => {
    document.removeEventListener("mousedown", this.handleOutsideOnClick, false);
  };

  setElementRef = (el: ?HTMLElement): mixed => {
    if (el) this.elementRef = el;
  };

  isOutsideClick = (target: mixed) =>
    this.elementRef &&
    target instanceof Node &&
    !this.elementRef.contains(target);

  handleOutsideOnClick: MouseEventListener = ({ target }) => {
    if (this.isOutsideClick(target)) this.props.onOutsideClick();
  };

  render() {
    const { children } = this.props;
    return children({ setElementRef: this.setElementRef });
  }
}

export default ClickOutside;

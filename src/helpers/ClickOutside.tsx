import * as React from "react";

interface Props {
  children: (v: { setElementRef: (el: HTMLElement) => any }) => React.ReactNode;
  onOutsideClick: () => void;
}

/**
 * A helper to help you do something when a user clicks outside of a component
 */
class ClickOutside extends React.PureComponent<Props, {}> {
  elementRef: HTMLElement | undefined;

  componentDidMount = () => {
    document.addEventListener("mousedown", this.handleOutsideOnClick, false);
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleOutsideOnClick, false);
  };

  setElementRef = (el: HTMLElement) => {
    if (el) this.elementRef = el;
  };

  isOutsideClick = (target: any) =>
    this.elementRef &&
    target instanceof Node &&
    !this.elementRef.contains(target);

  handleOutsideOnClick: React.EventHandler<any> = ({ target }) => {
    if (this.isOutsideClick(target)) this.props.onOutsideClick();
  };

  render() {
    const { children } = this.props;
    return children({ setElementRef: this.setElementRef });
  }
}

export default ClickOutside;

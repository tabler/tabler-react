import React, {
  forwardRef,
  ReactHTMLElement,
  HTMLProps,
  ElementType,
} from "react";
import cn from "classnames";
import getUtilityPropsClasses, {
  UtilityProps,
} from "./utilityPropsToClassNames";
import capitalize from "./capitalize";
import { ClassValue } from "classnames/types";
import { RefHandler } from "react-popper";

export interface ELProps extends UtilityProps {
  classNames?: ClassValue;
}

export interface ComponentProps<T = ReactHTMLElement<any>>
  extends ELProps,
    HTMLProps<T> {}

export const makeElement = function<T extends Element>(element: ElementType) {
  const Component = forwardRef(function(
    {
      d,
      m,
      mt,
      mb,
      ml,
      mr,
      mx,
      my,
      p,
      pt,
      pb,
      pl,
      pr,
      px,
      py,
      className,
      classNames,
      ...props
    }: ComponentProps<T>,
    ref: React.Ref<T> | RefHandler
  ) {
    const utilityClasses = getUtilityPropsClasses({
      d,
      m,
      mt,
      mb,
      ml,
      mr,
      mx,
      my,
      p,
      pt,
      pb,
      pl,
      pr,
      px,
      py,
    });
    const _className = cn(utilityClasses, classNames, className);
    return React.createElement(element, {
      className: _className,
      ref,
      ...props,
    });
  });
  Component.displayName = capitalize(element);
  return Component;
};

export default makeElement;

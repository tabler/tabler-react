import React, { HTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import getUtilityPropsClasses, {
  UtilityProps,
} from "./utilityPropsToClassNames";
import capitalize from "./capitalize";

export interface HTMLProps<T extends HTMLElement>
  extends HTMLAttributes<T>,
    UtilityProps {}

export const makeElement = function<T extends HTMLElement>(element: string) {
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
      ...props
    }: HTMLProps<T>,
    ref: React.Ref<T>
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
    const _className = cn(utilityClasses, className);
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

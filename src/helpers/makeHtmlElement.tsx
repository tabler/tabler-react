import React, { HTMLAttributes, forwardRef } from "react";
import cn from "classnames";
import getUtilityPropsClasses, {
  UtilityProps,
} from "./utilityPropsToClassNames";
import capitalize from "./capitalize";
import { ClassValue } from "classnames/types";

export interface ELProps<T extends HTMLOrSVGElement>
  extends HTMLAttributes<T>,
    UtilityProps {
  classNames?: ClassValue;
}

export const makeElement = function<T extends HTMLOrSVGElement>(
  element: string
) {
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
    }: ELProps<T>,
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

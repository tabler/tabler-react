import React, { CSSProperties } from "react";
import { UtilityProps } from "../helpers/utilityPropsToClassNames";

/**
 * Base Props Interface for Tabler components
 */
export interface TablerComponent extends UtilityProps {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}

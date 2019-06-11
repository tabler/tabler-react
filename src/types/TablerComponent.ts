import React, { CSSProperties, ReactChild } from "react";
import { ClassValue } from "classnames/types";

/**
 * Base Props Interface for Tabler components
 */
export interface TablerComponent {
  children?: React.ReactChild | React.ReactChild[];
  className?: ClassValue;
  style?: CSSProperties;
}

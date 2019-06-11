import React, { CSSProperties, ReactChild } from "react";

/**
 * Base Props Interface for Tabler components
 */
export interface TablerComponent {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
  style?: CSSProperties;
}

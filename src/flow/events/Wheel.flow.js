// @flow

/**
 * Type definitions for Wheel EventHandling
 */

export type Wheel = {|
  /**
   * Handle Wheel Event
   */
  +onWheel?: (event: SyntheticWheelEvent<*>) => mixed,
|};

// @flow

/**
 * Type definitions for Image EventHandling
 */

export type Image = {|
  /**
   * Handle Image Loading Event
   */
  +onLoad?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Image Error Event
   */
  +onError?: (event: SyntheticEvent<*>) => mixed,
|};

// @flow

/**
 * Type definitions for UI EventHandling
 */

export type UserInterface = {|
  /**
   * Handle Scroll Event
   */
  +onScroll?: (event: SyntheticUIEvent<*>) => mixed,
|};

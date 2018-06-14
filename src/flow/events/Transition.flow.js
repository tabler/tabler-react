// @flow

/**
 * Type definitions for Transition EventHandling
 */

export type Transition = {|
  /**
   * Handle End of Transition
   */
  +onTransitionEnd?: (event: SyntheticTransitionEvent<*>) => mixed,
|};

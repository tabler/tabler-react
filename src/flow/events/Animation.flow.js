// @flow

/**
 * Type definitions for Animation EventHandling
 */

export type Animation = {|
  /**
   * Handle Animation Start
   */
  +onAnimationStart?: (event: SyntheticAnimationEvent<*>) => mixed,
  /**
   * Handle Animation End
   */
  +onAnimationEnd?: (event: SyntheticAnimationEvent<*>) => mixed,
  /**
   * Handle Animation Interation
   */
  +onAnimationIteration?: (event: SyntheticAnimationEvent<*>) => mixed,
|};

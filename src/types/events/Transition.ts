/**
 * interface definitions for Transition EventHandling
 */

export interface TransitionEvents {
  /**
   * Handle End of Transition
   */
  onTransitionEnd?: (event: React.TransitionEvent) => any;
}

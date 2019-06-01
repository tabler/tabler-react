/**
 * interface definitions for Transition EventHandling
 */

export interface Transition {
  /**
   * Handle End of Transition
   */
  onTransitionEnd?: (event: React.TransitionEvent) => any;
}

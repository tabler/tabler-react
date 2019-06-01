/**
 * interface definitions for Focus EventHandling
 */

export interface Focus {
  /**
   * Handle Blur Event
   */
  onBlur?: (event: React.FocusEvent) => any;
  /**
   * Handle Focus Event
   */
  onFocus?: (event: React.FocusEvent) => any;
}

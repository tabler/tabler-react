/**
 * interface definitions for Composition EventHandling
 */

export interface CompositionEvents {
  /**
   * Handle Composition Start
   */
  onCompositionStart?: (event: React.ClipboardEvent) => any;
  /**
   * Handle Composition End
   */
  onCompositionEnd?: (event: React.ClipboardEvent) => any;
  /**
   * Handle Composition Update
   */
  onCompositionUpdate?: (event: React.ClipboardEvent) => any;
}

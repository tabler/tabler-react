/**
 * interface definitions for Keyboard EventHandling
 */

export interface KeyboardEvents {
  /**
   * Handle Key Down Event
   */
  onKeyDown?: (event: React.KeyboardEvent) => any;
  /**
   * Handle Key Press Event
   */
  onKeyPress?: (event: React.KeyboardEvent) => any;
  /**
   * Handle Key Up Event
   */
  onKeyUp?: (event: React.KeyboardEvent) => any;
}

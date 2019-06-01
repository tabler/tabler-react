/**
 * interface definitions for Form EventHandling
 */

export interface Form {
  /**
   * Handle Change Event
   */
  onChange?: (event: React.KeyboardEvent) => any;
  /**
   * Handle Input Event
   */
  onInput?: (event: React.KeyboardEvent) => any;
  /**
   * Handle Invalid Input Event
   */
  onInvalid?: (event: React.KeyboardEvent) => any;
  /**
   * Handle Form Submit Event
   */
  onSubmit?: Function;
}

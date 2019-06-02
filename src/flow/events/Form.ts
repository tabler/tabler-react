/**
 * interface definitions for Form EventHandling
 */

export interface Form {
  /**
   * Handle Change Event
   */
  onChange?: (event: React.FormEvent) => any;
  /**
   * Handle Input Event
   */
  onInput?: (event: React.FormEvent) => any;
  /**
   * Handle Invalid Input Event
   */
  onInvalid?: (event: React.FormEvent) => any;
  /**
   * Handle Form Submit Event
   */
  onSubmit?: (event: React.FormEvent) => any;
}

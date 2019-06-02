/**
 * interface definitions for Form EventHandling
 */

export interface Form {
  /**
   * Handle Change Event
   */
  onChange?: (event: React.ChangeEvent) => any;
  /**
   * Handle Input Event
   */
  onInput?: (event: React.ChangeEvent) => any;
  /**
   * Handle Invalid Input Event
   */
  onInvalid?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Form Submit Event
   */
  onSubmit?: (event: React.FormEvent) => any;
}

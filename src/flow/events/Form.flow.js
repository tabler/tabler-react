// @flow

/**
 * Type definitions for Form EventHandling
 */

export type Form = {|
  /**
   * Handle Change Event
   */
  +onChange?: (event: SyntheticInputEvent<*>) => mixed,
  /**
   * Handle Input Event
   */
  +onInput?: (event: SyntheticInputEvent<*>) => mixed,
  /**
   * Handle Invalid Input Event
   */
  +onInvalid?: (event: SyntheticInputEvent<*>) => mixed,
  /**
   * Handle Form Submit Event
   */
  +onSubmit?: Function,
|};

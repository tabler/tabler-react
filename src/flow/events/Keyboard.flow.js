// @flow

/**
 * Type definitions for Keyboard EventHandling
 */

export type Keyboard = {|
  /**
   * Handle Key Down Event
   */
  +onKeyDown?: (event: SyntheticKeyboardEvent<*>) => mixed,
  /**
   * Handle Key Press Event
   */
  +onKeyPress?: (event: SyntheticKeyboardEvent<*>) => mixed,
  /**
   * Handle Key Up Event
   */
  +onKeyUp?: (event: SyntheticKeyboardEvent<*>) => mixed,
|};

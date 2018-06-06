// @flow

/**
 * Type definitions for Focus EventHandling
 */

export type Focus = {|
  /**
   * Handle Blur Event
   */
  +onBlur?: (event: SyntheticFocusEvent<*>) => mixed,
  /**
   * Handle Focus Event
   */
  +onFocus?: (event: SyntheticFocusEvent<*>) => mixed,
|};

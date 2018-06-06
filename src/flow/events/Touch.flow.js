// @flow

/**
 * Type definitions for Touch EventHandling
 */

export type Touch = {|
  /**
   * Handle Touch Cancel Event
   */
  +onTouchCancel?: (event: SyntheticTouchEvent<*>) => mixed,
  /**
   * Handle Touch End Event
   */
  +onTouchEnd?: (event: SyntheticTouchEvent<*>) => mixed,
  /**
   * Handle Touch Move Event
   */
  +onTouchMove?: (event: SyntheticTouchEvent<*>) => mixed,
  /**
   * Handle Touch Start Event
   */
  +onTouchStart?: (event: SyntheticTouchEvent<*>) => mixed,
|};

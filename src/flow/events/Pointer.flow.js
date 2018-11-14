// @flow

/**
 * Type definitions for Pointer EventHandling
 */

export type Pointer = {|
  /**
   * Handle Pointer Down Event
   */
  +onPointerDown?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Move Event
   */
  +onPointerMove?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Up Event
   */
  +onPointerUp?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Cancel Event
   */
  +onPointerCancel?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Capture Acquisition Event
   */
  +onGotPointerCapture?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Capture Loss Event
   */
  +onLostPointerCapture?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Entering the Current Component
   */
  +onPointerEnter?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Leaving the Current Component Event
   */
  +onPointerLeave?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Over Event
   */
  +onPointerOver?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Pointer Up Event
   */
  +onPointerUp?: (event: SyntheticEvent<*>) => mixed,
|};

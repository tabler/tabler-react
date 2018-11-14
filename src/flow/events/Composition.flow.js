// @flow

/**
 * Type definitions for Composition EventHandling
 */

export type Composition = {|
  /**
   * Handle Composition Start
   */
  +onCompositionStart?: (event: SyntheticClipboardEvent<*>) => mixed,
  /**
   * Handle Composition End
   */
  +onCompositionEnd?: (event: SyntheticClipboardEvent<*>) => mixed,
  /**
   * Handle Composition Update
   */
  +onCompositionUpdate?: (event: SyntheticClipboardEvent<*>) => mixed,
|};

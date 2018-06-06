// @flow

/**
 * Type definitions for Clipboard EventHandling
 */

export type Clipboard = {|
  /**
   * Handle Copy Event
   */
  +onCopy?: (event: SyntheticClipboardEvent<*>) => mixed,
  /**
   * Handle Cut Event
   */
  +onCut?: (event: SyntheticClipboardEvent<*>) => mixed,
  /**
   * Handle Paste Event
   */
  +onPaste?: (event: SyntheticClipboardEvent<*>) => mixed,
|};

// @flow

/**
 * Type definitions for Selection EventHandling
 */

export type Selection = {|
  /**
   * Handle Selection Event
   */
  +onSelect?: (event: SyntheticEvent<*>) => mixed,
|};

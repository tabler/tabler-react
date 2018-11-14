// @flow

/**
 * Type definitions for Media EventHandling
 */

export type Media = {|
  /**
   * Handle Media Abort Event
   */
  +onAbort?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Can Play Event
   */
  +onCanPlay?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Can Play Through Event
   */
  +onCanPlayThrough?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Duration Change Event
   */
  +onDurationChange?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Emptied Event
   */
  +onEmptied?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Encrypted Media
   */
  +onEncrypted?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media End Event
   */
  +onEnded?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Error Event
   */
  +onError?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle End of Media Data Loading
   */
  +onLoadedData?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle End of Media Metadata Loading
   */
  +onLoadedMetadata?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Start of  Media Loading
   */
  +onLoadStart?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Pause Event
   */
  +onPause?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Play Event
   */
  +onPlay?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Playing
   */
  +onPlaying?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Progress
   */
  +onProgress?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Rate Change
   */
  +onRateChange?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Seeked Media Event
   */
  +onSeeked?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Seeking
   */
  +onSeeking?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Stalled Media Event
   */
  +onStalled?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Suspend Event
   */
  +onSuspend?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Time Update
   */
  +onTimeUpdate?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Volume Change
   */
  +onVolumeChange?: (event: SyntheticEvent<*>) => mixed,
  /**
   * Handle Media Waiting
   */
  +onWaiting?: (event: SyntheticEvent<*>) => mixed,
|};

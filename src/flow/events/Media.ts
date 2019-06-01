/**
 * interface definitions for Media EventHandling
 */

export interface Media {
  /**
   * Handle Media Abort Event
   */
  onAbort?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Can Play Event
   */
  onCanPlay?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Can Play Through Event
   */
  onCanPlayThrough?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Duration Change Event
   */
  onDurationChange?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Emptied Event
   */
  onEmptied?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Encrypted Media
   */
  onEncrypted?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media End Event
   */
  onEnded?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Error Event
   */
  onError?: (event: React.SyntheticEvent) => any;
  /**
   * Handle End of Media Data Loading
   */
  onLoadedData?: (event: React.SyntheticEvent) => any;
  /**
   * Handle End of Media Metadata Loading
   */
  onLoadedMetadata?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Start of  Media Loading
   */
  onLoadStart?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Pause Event
   */
  onPause?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Play Event
   */
  onPlay?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Playing
   */
  onPlaying?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Progress
   */
  onProgress?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Rate Change
   */
  onRateChange?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Seeked Media Event
   */
  onSeeked?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Seeking
   */
  onSeeking?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Stalled Media Event
   */
  onStalled?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Suspend Event
   */
  onSuspend?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Time Update
   */
  onTimeUpdate?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Volume Change
   */
  onVolumeChange?: (event: React.SyntheticEvent) => any;
  /**
   * Handle Media Waiting
   */
  onWaiting?: (event: React.SyntheticEvent) => any;
}

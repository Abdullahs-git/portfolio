export interface MkWorldConfig {
  /** the word the board types above itself as the last keys land */
  typed?: string;
  /** CSS font-family strings; both must be loaded on the page */
  displayFont?: string;
  monoFont?: string;
  /** one line per boot job, printed in the preloader terminal */
  preloaderLines?: string[];
}

/** Boots the keyboard experience against the mounted landing markup; returns a teardown. */
export function bootMk(config?: MkWorldConfig): () => void;

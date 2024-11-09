export interface ShazamResponse {
  id: string;
  type: string;
  href: string;
  attributes: {
    hasTimeSyncedLyrics: boolean;
    albumName: string;
    genreNames: string[];
    trackNumber: number;
    releaseDate: string;
    durationInMillis: number;
    isVocalAttenuationAllowed: boolean;
    isMasteredForItunes: boolean;
    isrc: string;
    artwork: {
      width: number;
      url: string;
      height: number;
      textColor3: string;
      textColor2: string;
      textColor4: string;
      textColor1: string;
      bgColor: string;
      hasP3: boolean;
    };
    audioLocale: string;
    url: string;
    playParams: {
      id: string;
      kind: string;
    };
    discNumber: number;
    isAppleDigitalMaster: boolean;
    hasLyrics: boolean;
    audioTraits: string[];
    name: string;
    previews: {
      url: string;
    }[];
    artistName: string;
  };
  relationships: {
    artists: {
      href: string;
      data: {
        id: string;
        type: string;
        href: string;
      }[];
    };
    "music-videos": {
      href: string;
      data: [];
    };
  };
  meta: {
    contentVersion: {
      RTCI: number;
      MZ_INDEXER: number;
    };
  };
}

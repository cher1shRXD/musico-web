import React from 'react'
import { YoutubeResponse } from '../../types/music/youtubeResponse';

const useSortSearchResult = () => {
  const sortSearchResult = (
    data: YoutubeResponse[],
    artistName: string,
    songTitle: string
  ) => {
    const sortedData = data.sort((a, b) => {
      const titleSimilarityA =
        a.title.localeCompare(songTitle, undefined, { sensitivity: "base" }) ===
        0
          ? 1
          : 0;
      const titleSimilarityB =
        b.title.localeCompare(songTitle, undefined, { sensitivity: "base" }) ===
        0
          ? 1
          : 0;

      const artistSimilarityA =
        a.artists[0].name.localeCompare(artistName, undefined, {
          sensitivity: "base",
        }) === 0
          ? 1
          : 0;
      const artistSimilarityB =
        b.artists[0].name.localeCompare(artistName, undefined, {
          sensitivity: "base",
        }) === 0
          ? 1
          : 0;

      const scoreA = titleSimilarityA * 2 + artistSimilarityA;
      const scoreB = titleSimilarityB * 2 + artistSimilarityB;

      return scoreB - scoreA;
    });

    let songMatch: YoutubeResponse | null = null;
    let videoMatch: YoutubeResponse | null = null;

    for (const item of sortedData) {
      if (item.resultType === "song" && !songMatch) {
        songMatch = item;
      } else if (item.resultType === "video" && !videoMatch) {
        videoMatch = item;
      }
      if (songMatch && videoMatch) break;
    }

    return [songMatch, videoMatch].filter(
      (item): item is YoutubeResponse => item !== null
    );
  };

  return sortSearchResult
}

export default useSortSearchResult
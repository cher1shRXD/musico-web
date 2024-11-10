import { useEffect, useState } from "react";
import useSearchMusic from "../../hooks/music/useSearchMusic";
import { SpotifyResponse } from "../../types/music/spotifyResponse";
import * as S from "./style";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";
import { YoutubeResponse } from "../../types/music/youtubeResponse";

const MusicItem = ({ data }: { data: SpotifyResponse }) => {
  const { searchMusic, searchResult } = useSearchMusic();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const degradeKeyword = data.artist_and_title.split(" - ");
  const [sortedData, setSortedData] = useState<YoutubeResponse[]>([]); 

  const sortResults = (
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

  useEffect(() => {
    const sorted = sortResults(
      searchResult,
      degradeKeyword[0],
      degradeKeyword[1]
    );
    setSortedData(sorted);
    console.log(sorted);

    const selected = sorted[0];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.artists,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
      });
    }
  }, [searchResult]);

  return (
    <S.Container
      onClick={() =>
        searchMusic(`${data.artist_and_title}`)
      }
    >
      {data.artist_and_title}
    </S.Container>
  );
};

export default MusicItem;

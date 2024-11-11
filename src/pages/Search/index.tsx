import { useEffect, useState } from "react"
import useSearchMusic from "../../hooks/music/useSearchMusic";
import { VibeResponse } from "../../types/music/vibeResponse";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";
import { Artist } from "../../types/music/artist";
import MusicItem from "../../components/MusicItem";

const Search = () => {
  const [query, setQuery] = useState('');
  const { searchResult, searchMusic } = useSearchMusic(); 
  const { youtubeResult, getYoutubeMusic } = useGetYoutube();
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const [musicTitle, setMusicTitle] = useState("");
  const [musicArtist, setMusicArtist] = useState<Artist[]>([]);
  const [trackId, setTrackId] = useState("");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  const searchRequest = () => {
    searchMusic(query);
  }

  const handleClickMusic = (data: VibeResponse) => {
    setMusicArtist(data.artists);
    setMusicTitle(data.title);
    setTrackId(data.trackId);
    getYoutubeMusic(`${data.title} - ${data.artists[0].artistName}`);
  };

  useEffect(() => {
    if (musicArtist.length === 0 || musicTitle.length === 0) {
      return;
    }

    const selected = youtubeResult[0];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.author,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
        trackId,
      });
    }
  }, [youtubeResult]);

  useEffect(() => {
    if (error !== 150) {
      return;
    }
    const selected = youtubeResult[1];
    if (selected) {
      setNowPlaying({
        title: selected.title,
        artist: selected.author,
        coverUrl: `https://img.youtube.com/vi/${selected.videoId}/mqdefault.jpg`,
        videoId: selected.videoId,
        trackId,
      });
    }
  }, [error]);

  return (
    <div>
      <input type="text" onChange={handleQuery} value={query}/>
      <button onClick={searchRequest}>검색</button>

      <div>
        {
          searchResult.map((data)=>(
            <MusicItem onClick={()=>handleClickMusic(data)} data={data} key={data.trackId}/>
          ))
        }
      </div>
    </div>
  )
}

export default Search
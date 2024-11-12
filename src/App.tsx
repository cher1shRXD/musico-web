import { useEffect } from "react";
import Router from "./components/Router";
import { useNowPlayingStore } from "./store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "./store/player/usePlayerErrorStore";
import useGetYoutube from "./hooks/music/useGetYoutube";
import { usePlayerReadyStore } from "./store/player/usePlayerReadyStore";
import { usePlayerStateStore } from "./store/player/usePlayerStateStore";

const App = () => {
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  const error = usePlayerErrorStore((state) => state.error);
  const { youtubeResult, getYoutubeMusic } = useGetYoutube();
  const setIsReady = usePlayerReadyStore((state) => state.setIsReady);
  const setIsPlaying = usePlayerStateStore(state=>state.setIsPlaying);

  useEffect(()=>{
    if(nowPlaying.trackId) {
      getYoutubeMusic(`${nowPlaying.title} ${nowPlaying.artist[0].artistName}`);
    }
  },[nowPlaying.trackId]);

  useEffect(() => {
    const selected = youtubeResult[0];
    if (selected) {
      setNowPlaying({ ...nowPlaying, videoId: selected.videoId });
      setIsReady(true);
      setIsPlaying(true);
    }
  }, [youtubeResult]);

  useEffect(() => {
    if (error !== 150) {
      return;
    }
    const selected = youtubeResult[1];
    if (selected) {
      setNowPlaying({ ...nowPlaying, videoId: selected.videoId });
    }
  }, [error]);

  return <Router />;
};

export default App;

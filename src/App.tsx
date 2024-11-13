import { useEffect } from "react";
import Router from "./components/Router";
import { useNowPlayingStore } from "./store/music/useNowPlayingStore";
import useGetYoutube from "./hooks/music/useGetYoutube";
import { usePlayerReadyStore } from "./store/player/usePlayerReadyStore";
import { usePlayerStateStore } from "./store/player/usePlayerStateStore";

const App = () => {
  const setNowPlaying = useNowPlayingStore((state) => state.setNowPlaying);
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  const { youtubeResult, getYoutubeMusic } = useGetYoutube();
  const setIsReady = usePlayerReadyStore((state) => state.setIsReady);
  const setIsPlaying = usePlayerStateStore(state=>state.setIsPlaying);

  useEffect(()=>{
    if(nowPlaying.trackId) {
      getYoutubeMusic(`${nowPlaying.title}${nowPlaying.artist[0].artistName}`);
    }
  },[nowPlaying.trackId]);

  useEffect(() => {
    if (youtubeResult) {
      setNowPlaying({ ...nowPlaying, videoId: youtubeResult });
      setIsReady(true);
      setIsPlaying(true);
    }
  }, [youtubeResult]);

  useEffect(()=>{
    console.log(nowPlaying);
  },[nowPlaying]);

  return <Router />;
};

export default App;

import { useEffect, useState } from "react";
import Router from "./components/Router";
import { useNowPlayingStore } from "./store/music/useNowPlayingStore";
import useGetYoutube from "./hooks/music/useGetYoutube";
import useAddSong from "./hooks/queue/useAddSong";

const App = () => {
  const nowPlaying = useNowPlayingStore(state=>state.nowPlaying);
  const getYoutubeMusic = useGetYoutube();
  const addSong = useAddSong();
  const [videoId, setVideoId] = useState('');

  const getVideoId = async () => {
    if (nowPlaying.trackId !== "" && nowPlaying.videoId === "") {
      const youtubeResult = await getYoutubeMusic(
        `${nowPlaying.title}${nowPlaying.artist[0].artistName}`
      );
      setVideoId(youtubeResult);
    }
  }

  useEffect(()=>{
    getVideoId();
  },[nowPlaying.trackId]);

  useEffect(()=>{
    if(videoId && videoId !== '') {
      addSong({ ...nowPlaying, videoId });
    }
  },[videoId]);

  return <Router />;
};

export default App;

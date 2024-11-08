import { useRef, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import ProgressBar from "../ProgressBar";
import { MusicData } from "../../types/music/musicData";

const PlayBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [musicData, setMusicData] = useState<MusicData>({
    artist: "",
    title: "",
    coverUrl: "https://img.youtube.com/vi/image/mqdefault.jpg",
  });
  const playerRef = useRef<ReactPlayer | null>(null);
  const VIDEO_ID = "4_yWMOPfSNo";

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleLoad = () => {
    setIsReady(true);

    setMusicData({
      title: "",
      artist: "",
      coverUrl: `https://img.youtube.com/vi/${VIDEO_ID}/mqdefault.jpg`,
    });
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    } else if (minutes > 0) {
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    } else {
      return `${remainingSeconds < 10 ? "0" : ""}${remainingSeconds.toFixed(
        0
      )}`;
    }
  };

  return (
    <S.Container>
      <S.Playbar>
        <S.InfoWrap>
          <S.Cover
            src={!isReady ? "/assets/loading.gif" : musicData.coverUrl}
            alt=""
            isPlaying={isPlaying}
          />
          <p>{musicData.title}</p>
          <p>{musicData.artist}</p>
        </S.InfoWrap>
        <S.PlayControlWrap>
          <S.ButtonsWrap>
            <S.ControlButton src="/assets/previous.svg" onClick={handlePlay} />
            <S.ControlButton
              src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
              onClick={handlePlay}
            />
            <S.ControlButton src="/assets/next.svg" onClick={handlePlay} />
          </S.ButtonsWrap>
          <ProgressBar
            progress={progress}
            onProgressChange={(newProgress) => {
              setProgress(newProgress);
              playerRef.current?.seekTo(newProgress);
            }}
          />
          <S.TimeWrap>
            <p>{formatTime(duration * progress)}</p>
            <p>{formatTime(duration)}</p>
          </S.TimeWrap>
        </S.PlayControlWrap>
        <S.OtherControlWrap>gdgd</S.OtherControlWrap>
      </S.Playbar>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
        playing={isPlaying}
        width={0}
        height={0}
        ref={playerRef}
        onProgress={({ played }) => setProgress(played)}
        onDuration={(e: number) => setDuration(e)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        onReady={handleLoad}
        onBufferEnd={() => setIsReady(true)}
        onBuffer={() => setIsReady(false)}
      />
    </S.Container>
  );
};

export default PlayBar;

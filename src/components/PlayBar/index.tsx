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
  const VIDEO_ID = "Q0sZX07H2Ew";

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleLoad = () => {
    setIsReady(true);

    setMusicData({
      title: '',
      artist: '',
      coverUrl: `https://img.youtube.com/vi/${VIDEO_ID}/mqdefault.jpg`
    });
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <S.Container>
      <S.Playbar>
        <S.InfoWrap>
          <S.Cover src={musicData.coverUrl} alt="" isPlaying={isPlaying} />
          <p>{musicData.title}</p>
          <p>{musicData.artist}</p>
        </S.InfoWrap>
        <S.PlayControlWrap>
          <S.ButtonsWrap>
            <S.ControlButton src="/assets/previous.svg" onClick={handlePlay} />
            <S.ControlButton
              src={
                !isReady
                  ? "/assets/loading.gif"
                  : isPlaying
                  ? "/assets/pause.svg"
                  : "/assets/play.svg"
              }
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
            <time dateTime="P1S">{formatTime(duration * progress)}</time>
            <time dateTime="P1S">{formatTime(duration)}</time>
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

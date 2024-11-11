import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import ProgressBar from "../ProgressBar";
import { useNowPlayingStore } from "../../store/music/useNowPlayingStore";
import { usePlayerErrorStore } from "../../store/player/usePlayerErrorStore";

const songs = ["Q0sZX07H2Ew", "wtUaW2HEsCY", "lA76F5OZbiM", "8EfV1RhgQaI"];

const PlayBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [queueIdx, setQueueIdx] = useState(0);
  const [isLoop, setIsLoop] = useState(false);
  const nowPlaying = useNowPlayingStore((state) => state.nowPlaying);
  const playerRef = useRef<ReactPlayer | null>(null);
  const setError = usePlayerErrorStore((state) => state.setError);

  useEffect(() => {
    if (nowPlaying.videoId.length > 0) {
      setIsPlaying(true);
    }
  }, [nowPlaying.videoId]);

  const handlePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleLoad = () => {
    setError(null);
    setIsReady(true);
  };

  const handleEnd = () => {
    if (queueIdx === songs.length - 1) {
      if (isLoop) {
        setQueueIdx(0);
        console.log('루프 온, 송 엔드');
        playerRef.current?.seekTo(0);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else {
      setQueueIdx((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (queueIdx === songs.length - 1) {
      if (isLoop) {
        setQueueIdx(0);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else {
      setQueueIdx((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    if (progress >= 0.2) {
      setProgress(0);
      playerRef.current?.seekTo(0);
      return;
    }
    if (queueIdx === 0) {
      if (isLoop) {
        setQueueIdx(songs.length - 1);
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else {
      setQueueIdx((prev) => prev - 1);
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    } else {
      return `${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds.toFixed(0)}`;
    }
  };

  return (
    <S.Container>
      <S.Playbar>
        <S.InfoWrap>
          <S.Cover
            src={!isReady ? "/assets/loading.gif" : nowPlaying.coverUrl}
            alt=""
            isPlaying={isPlaying}
          />
          <S.MusicInfo>
            <S.MusicTitle>{nowPlaying.title}</S.MusicTitle>
            <S.MusicArtist>{nowPlaying.artist}</S.MusicArtist>
          </S.MusicInfo>
        </S.InfoWrap>
        <S.PlayControlWrap>
          <S.ButtonsWrap>
            <S.ControlButton
              src="/assets/previous.svg"
              onClick={handlePrevious}
            />
            <S.ControlButton
              src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
              onClick={handlePlay}
            />
            <S.ControlButton src="/assets/next.svg" onClick={handleNext} />
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
        <S.OtherControlWrap>
          <button onClick={() => setIsLoop((prev) => !prev)}>
            {isLoop ? "반복 중" : "반복"}
          </button>
        </S.OtherControlWrap>
      </S.Playbar>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${nowPlaying.videoId}`}
        playing={isPlaying}
        width={0}
        height={0}
        ref={playerRef}
        volume={0.5}
        onProgress={({ played }) => setProgress(played)}
        onDuration={(e: number) => setDuration(e)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={handleEnd}
        onReady={handleLoad}
        onBufferEnd={() => setIsReady(true)}
        onBuffer={() => setIsReady(false)}
        onError={(e) => {
          setError(e);
        }}
      />
    </S.Container>
  );
};

export default PlayBar;

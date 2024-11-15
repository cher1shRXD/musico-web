import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import ProgressBar from "../ProgressBar";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { useUserStore } from "../../store/user/useUserStore";
import usePlayNext from "../../hooks/play/usePlayNext";
import usePlayPrevious from "../../hooks/play/usePlayPrevious";

const PlayBar = () => {
  const isPlaying = usePlayerStateStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isReady, setIsReady] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);
  const user = useUserStore((state) => state.user);
  const playNext = usePlayNext();
  const playPrevious = usePlayPrevious();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLoad = () => {
    setIsReady(true);
  };

  const handleNext = async () => {
    if (!user || user.queue.length === 0) {
      return;
    }
    await playNext();
    if (user.queue.length === 1) {
      playerRef.current?.seekTo(0);
      setIsPlaying(true);
    }
    if (user.currentNowPlaying === user.queue.length - 1) {
      if (isLoop) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(true);
    }
  };

  const handlePrevious = async () => {
    if (progress >= 0.2) {
      setProgress(0);
      playerRef.current?.seekTo(0);
      return;
    }
    await playPrevious();
    setIsPlaying(true);
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

  const handleSpace = useCallback(
    (e: KeyboardEvent) => {
      if (
        (e.target as HTMLElement).tagName === "INPUT" ||
        (e.target as HTMLElement).tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === " ") {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    },
    [isPlaying, setIsPlaying]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleSpace);
    return () => {
      document.removeEventListener("keydown", handleSpace);
    };
  }, [handleSpace]);

  useEffect(() => {
    if (
      user?.queue[user.currentNowPlaying].videoId &&
      isReady &&
      user.currentNowPlaying !== user.queue.length - 1
    ) {
      setIsPlaying(true);
      return;
    }
    if (!isLoop) {
      return;
    }
    setIsPlaying(true);
  }, [user?.queue[user.currentNowPlaying]]);

  return (
    <S.Container>
      <S.Playbar>
        <S.InfoWrap>
          <S.Cover
            src={
              !isReady
                ? "/assets/loading.gif"
                : user && user.queue.length > 0
                ? user.queue[user.currentNowPlaying].coverUrl
                : "/assets/loading.gif"
            }
            alt=""
          />
          <S.MusicInfo>
            <S.MusicTitle>
              {user && user.queue.length > 0
                ? user.queue[user.currentNowPlaying].title
                : "재생중인 곡이 없습니다."}
            </S.MusicTitle>
            <S.MusicArtistWrap>
              {user &&
                user.queue.length > 0 &&
                user.queue[user.currentNowPlaying].artist.map((artist, idx) => (
                  <S.MusicArtist key={idx}>
                    {`${artist.artistName}
                    ${
                      idx !==
                      user.queue[user.currentNowPlaying].artist.length - 1
                        ? " &\u00A0"
                        : ""
                    }`}
                  </S.MusicArtist>
                ))}
            </S.MusicArtistWrap>
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
          <S.StatusIcon
            onClick={() => setIsLoop((prev) => !prev)}
            src={isLoop ? "/assets/loopOn.svg" : "/assets/loopOff.svg"}
          />
          <S.StatusIcon onClick={() => {}} src={"/assets/shuffleOff.svg"} />
          <S.VolumeWrap>
            <S.StatusIcon
              src={
                volume >= 0.7
                  ? "/assets/volumeFull.svg"
                  : volume >= 0.4
                  ? "/assets/volumeMid.svg"
                  : "/assets/muted.svg"
              }
            />
            <ProgressBar
              progress={volume}
              onProgressChange={(newVolume) => setVolume(newVolume)}
            />
          </S.VolumeWrap>
        </S.OtherControlWrap>
      </S.Playbar>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${
          user && user.queue.length > 0
            ? user.queue[user.currentNowPlaying].videoId
            : ""
        }`}
        playing={isPlaying}
        width={0}
        height={0}
        ref={playerRef}
        volume={volume}
        onProgress={({ played }) => setProgress(played)}
        onDuration={(e: number) => setDuration(e)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onEnded={handleNext}
        onReady={handleLoad}
        onBufferEnd={() => setIsReady(true)}
        onBuffer={() => setIsReady(false)}
      />
    </S.Container>
  );
};

export default PlayBar;

import { useCallback, useEffect, useRef, useState } from "react";
import * as S from "./style";
import ReactPlayer from "react-player";
import ProgressBar from "../ProgressBar";
import { usePlayerStateStore } from "../../store/player/usePlayerStateStore";
import { useUserStore } from "../../store/user/useUserStore";
import usePlayNext from "../../hooks/play/usePlayNext";
import usePlayPrevious from "../../hooks/play/usePlayPrevious";
import { useVolumeStore } from "../../store/player/useVolumeStore";
import { useLoopStateStore } from "../../store/player/useLoopStateStore";
import useUpdateShuffle from "../../hooks/play/useUpdateShuffle";
import StoredMusicItem from "../StoredMusicItem";

const PlayBar = () => {
  const user = useUserStore((state) => state.user);
  const isPlaying = usePlayerStateStore((state) => state.isPlaying);
  const setIsPlaying = usePlayerStateStore((state) => state.setIsPlaying);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const volume = useVolumeStore((state) => state.volume);
  const setVolume = useVolumeStore((state) => state.setVolume);
  const [isReady, setIsReady] = useState(false);
  const isLoop = useLoopStateStore((state) => state.isLoop);
  const setIsLoop = useLoopStateStore((state) => state.setIsLoop);
  const playerRef = useRef<ReactPlayer | null>(null);
  const playNext = usePlayNext();
  const playPrevious = usePlayPrevious();
  const updateShuffle = useUpdateShuffle();
  const [clickable, setClickable] = useState(true);
  const [videoIdIdx, setVideoIdIdx] = useState(0);
  const [detailView, setDetailView] = useState(false);
  const [queueView, setQueueView] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleLoad = () => {
    setIsReady(true);
  };

  const handleNext = async () => {
    if (!clickable) {
      return;
    }
    setClickable(false);
    if (!user || user.queue.length === 0) {
      return;
    }
    await playNext();
    if (user.queue.length === 1) {
      playerRef.current?.seekTo(0);
      setIsPlaying(true);
    }
    if (user.currentSong === user.queue.length - 1) {
      if (isLoop) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(true);
    }
    setTimeout(() => setClickable(true), 1000);
  };

  const handlePrevious = async () => {
    if (!clickable) {
      return;
    }
    setClickable(false);
    if (progress >= 0.2) {
      setProgress(0);
      playerRef.current?.seekTo(0);
      return;
    }
    await playPrevious();
    setIsPlaying(true);
    setTimeout(() => setClickable(true), 1000);
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
    setVideoIdIdx(0);
    if (!isReady) {
      setIsPlaying(false);
      return;
    }
    if (!user) {
      return;
    }
    if (!user.queue[user.currentSong]) {
      setIsPlaying(false);
      return;
    }
    if (
      user.queue[user.currentSong].videoId &&
      user.currentSong !== user.queue.length - 1
    ) {
      setIsPlaying(true);
      return;
    }
    if (!isLoop) {
      return;
    }
    setIsPlaying(true);
  }, [user?.currentSong]);

  return (
    <S.Container>
      <S.Playbar $detailView={detailView} $queueView={queueView}>
        <S.QueueHeader $detailView={detailView}>
          <S.DropDown
            src="/assets/down.svg"
            $queueView={queueView}
            onClick={() => setQueueView((prev) => !prev)}
          />
        </S.QueueHeader>
        {queueView ? (
          <S.QueueWrap $detailView={detailView}>
            {user?.queue.map((data, idx) => (
              <StoredMusicItem data={data} key={idx} type="queue" />
            ))}
          </S.QueueWrap>
        ) : (
          <>
            <S.InfoWrap $detailView={detailView}>
              <S.Cover
                $detailView={detailView}
                src={
                  !isReady
                    ? "/assets/loading.gif"
                    : user && user.queue.length > 0
                    ? user.queue[user.currentSong].coverUrl
                    : "/assets/loading.gif"
                }
                alt=""
              />
              <S.MusicInfo $detailView={detailView}>
                <S.MusicTitle $detailView={detailView}>
                  {user && user.queue.length > 0
                    ? user.queue[user.currentSong].title
                    : "재생중인 곡이 없습니다."}
                </S.MusicTitle>
                <S.MusicArtistWrap>
                  {user &&
                    user.queue.length > 0 &&
                    user.queue[user.currentSong].artist.map((artist, idx) => (
                      <S.MusicArtist key={idx} $detailView={detailView}>
                        {`${artist.artistName}
                    ${
                      idx !== user.queue[user.currentSong].artist.length - 1
                        ? " &\u00A0"
                        : ""
                    }`}
                      </S.MusicArtist>
                    ))}
                </S.MusicArtistWrap>
              </S.MusicInfo>
            </S.InfoWrap>
            <S.PlayControlWrap $detailView={detailView}>
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
            <S.OtherControlWrap $detailView={detailView}>
              <S.StatusIcon
                onClick={() => setIsLoop(!isLoop)}
                src={isLoop ? "/assets/loopOn.svg" : "/assets/loopOff.svg"}
              />
              <S.StatusIcon
                onClick={updateShuffle}
                src={
                  user && user.isShuffle
                    ? "/assets/shuffleOn.svg"
                    : "/assets/shuffleOff.svg"
                }
              />
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
              <S.StatusIcon
                onClick={() => setDetailView((prev) => !prev)}
                src={
                  detailView ? "/assets/queueOn.svg" : "/assets/queueOff.svg"
                }
              />
            </S.OtherControlWrap>
          </>
        )}
        <S.MobileButtonWrap $detailView={detailView}>
          <S.MobileButton
            src={isPlaying ? "/assets/pause.svg" : "/assets/play.svg"}
            onClick={handlePlay}
          />
          <S.MobileButton
            onClick={() => setDetailView((prev) => !prev)}
            src={detailView ? "/assets/queueOn.svg" : "/assets/queueOff.svg"}
          />
        </S.MobileButtonWrap>
      </S.Playbar>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${
          user && user.queue.length > 0
            ? user.queue[user.currentSong].videoId[videoIdIdx]
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
        onError={(e) => {
          if (e === 150) {
            setVideoIdIdx((prev) => prev + 1);
          }
        }}
        pip={false}
      />
    </S.Container>
  );
};

export default PlayBar;

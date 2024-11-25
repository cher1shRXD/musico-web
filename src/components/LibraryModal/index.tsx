import { Modal } from "antd";
import * as S from "./style";
import useAddLast from "../../hooks/queue/useAddLast";
import { VibeResponse } from "../../types/music/vibeResponse";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import React, { useEffect, useState } from "react";
import useGetMyPlaylist from "../../hooks/playlist/useGetMyPlaylist";
import useAddToPlaylist from "../../hooks/playlist/useAddToPlaylist";
import { useQueueUpdateStore } from "../../store/update/useQueueUpdateStore";

const LibraryModal = ({
  modalOpen,
  setModalOpen,
  music,
}: {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
  music: VibeResponse;
}) => {
  const addLast = useAddLast();
  const getYoutubeMusic = useGetYoutube();
  const [isQueueChecked, setIsQueueChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const { playlist } = useGetMyPlaylist();
  const addToPlaylist = useAddToPlaylist();
  const [selectedPlaylist, setSelectedPlaylist] = useState<string[]>([]);
  const setIsUpdated = useQueueUpdateStore((state) => state.setIsUpdated);

  const handleSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const videoId = await getYoutubeMusic(
        `${music.title}${music.artists[0].artistName}`
      );
      const songData = {
        title: music.title,
        artist: music.artists,
        coverUrl: music.albumArt,
        trackId: music.trackId,
        videoId,
      };
      if (isQueueChecked) {
        await addLast(songData);
      }
      if (selectedPlaylist.length > 0) {
        if (selectedPlaylist.length > 0) {
          await Promise.all(
            selectedPlaylist.map((value) => addToPlaylist(songData, value))
          );
        }
      }
    } finally {
      setLoading(false);
      setIsUpdated(true);
      setTimeout(() => setModalOpen(false), 100);
    }
  };

  const handlePlaylistCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (selectedPlaylist.includes(value)) {
      const filtered = selectedPlaylist.filter((item) => item !== value);
      setSelectedPlaylist(filtered);
    } else {
      setSelectedPlaylist((prev) => [...prev, value]);
    }
  };

  return (
    <Modal
      title="라이브러리에 추가"
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={[
        <S.ModalCancelButton
          key="back"
          onClick={() => setModalOpen(false)}
          disabled={loading}
        >
          취소
        </S.ModalCancelButton>,
        <S.ModalOkButton key="submit" onClick={handleSubmit} disabled={loading}>
          {loading ? "추가 중..." : "추가"}
        </S.ModalOkButton>,
      ]}
    >
      <S.ItemContainer>
        <S.ItemSelect
          type="checkbox"
          onChange={() => setIsQueueChecked((prev) => !prev)}
        />
        <S.ItemTitle>재생목록</S.ItemTitle>
      </S.ItemContainer>
      <S.Hr />
      <S.ItemWrap>
        {playlist?.map((data) => (
          <S.ItemContainer key={data.id}>
            <S.ItemSelect
              type="checkbox"
              value={data.id}
              onChange={handlePlaylistCheck}
            />
            <S.ItemTitle>{data.title}</S.ItemTitle>
          </S.ItemContainer>
        ))}
      </S.ItemWrap>
    </Modal>
  );
};

export default LibraryModal;

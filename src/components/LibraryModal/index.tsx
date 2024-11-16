import { Modal } from "antd";
import * as S from "./style";
import useAddLast from "../../hooks/queue/useAddLast";
import { VibeResponse } from "../../types/music/vibeResponse";
import useGetYoutube from "../../hooks/music/useGetYoutube";
import { useState } from "react";

const LibraryModal = ({
  modalOpen,
  setModalOpen,
  music,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  music: VibeResponse;
}) => {
  const addLast = useAddLast();
  const getYoutubeMusic = useGetYoutube();
  const [isQueueChecked, setIsQueueChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if(!setLoading) {
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
    } finally {
      setLoading(false);
      setModalOpen(false);
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
      <S.ItemContainer>
        <S.ItemSelect type="checkbox" />
        <S.ItemTitle>플리</S.ItemTitle>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.ItemSelect type="checkbox" />
        <S.ItemTitle>플리</S.ItemTitle>
      </S.ItemContainer>
      <S.ItemContainer>
        <S.ItemSelect type="checkbox" />
        <S.ItemTitle>플리</S.ItemTitle>
      </S.ItemContainer>
    </Modal>
  );
};

export default LibraryModal;

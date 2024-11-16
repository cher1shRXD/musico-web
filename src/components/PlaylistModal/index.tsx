import { Modal } from "antd";
import * as S from "./style";
import { useState } from "react";
import useCreatePlaylist from "../../hooks/playlist/useCreatePlaylist";

const PlaylistModal = ({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const createPlaylist = useCreatePlaylist();

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (!loading || title.trim().length === 0) {
      return;
    }
    setLoading(true);
    try {
      await createPlaylist(title);
    } finally {
      setLoading(false);
      setTimeout(() => setModalOpen(false), 100);
    }
  };

  return (
    <Modal
      title="플레이리스트 생성"
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
          {loading ? "생성 중..." : "생성"}
        </S.ModalOkButton>,
      ]}
    >
      <S.Label>플레이리스트 이름</S.Label>
      <S.TitleInput
        type="text"
        placeholder="플레이리스트 이름을 입력해주세요."
        onChange={handleTitle}
        value={title}
      />
      <S.Warning>
        {title.trim().length === 0 && "공백 제외 1글자 이상 입력해주세요."}
      </S.Warning>
    </Modal>
  );
};

export default PlaylistModal;

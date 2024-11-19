import { Modal } from "antd";
import * as S from "./style";
import { useState } from "react";
import useDeletePlaylist from "../../hooks/playlist/useDeletePlaylist";
import { useNavigate } from "react-router-dom";
import { Playlist } from "../../types/playlist/playlist";
import useUpdatePlaylist from "../../hooks/playlist/useUpdatePlaylist";
import { usePlaylistUpdateStore } from "../../store/update/usePlaylistUpdateStore";

const PlaylistEditModal = ({
  modalOpen,
  setModalOpen,
  playlist,
}: {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  playlist: Playlist | undefined;
}) => {
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [title, setTitle] = useState("");
  const deletePlaylist = useDeletePlaylist();
  const updatePlaylist = useUpdatePlaylist();
  const navigate = useNavigate();
  const setIsUpdated = usePlaylistUpdateStore(state=>state.setIsUpdated);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async () => {
    if (loading || title.trim().length === 0 || !playlist) {
      return;
    }
    setLoading(true);
    try {
      await updatePlaylist(title, playlist.id);
    } finally {
      setIsUpdated(true);
      setLoading(false);
      setTimeout(() => setModalOpen(false), 100);
    }
  };

  const handleDelete = async () => {
    if (loading || !playlist || deleteLoading) {
      return;
    }
    setDeleteLoading(true);
    try {
      await deletePlaylist(playlist.id);
    } finally {
      setDeleteLoading(false);
      navigate('/');
      setTimeout(() => setModalOpen(false), 100);
    }
  };

  return (
    <Modal
      title="플레이리스트 수정"
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={[
        <S.PlaylistDeleteButton
          key="delete"
          onClick={handleDelete}
          disabled={loading || deleteLoading}
        >
          {deleteLoading ? "삭제 중..." : "삭제"}
        </S.PlaylistDeleteButton>,
        <S.ModalCancelButton
          key="back"
          onClick={() => setModalOpen(false)}
          disabled={loading || deleteLoading}
        >
          취소
        </S.ModalCancelButton>,
        <S.ModalOkButton key="submit" onClick={handleSubmit} disabled={loading || deleteLoading}>
          {loading ? "수정 중..." : "수정"}
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

export default PlaylistEditModal;

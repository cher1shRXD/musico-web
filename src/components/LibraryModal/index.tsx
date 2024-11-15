import { Modal } from 'antd';
import * as S from './style';

const LibraryModal = ({modalOpen, setModalOpen}: {modalOpen: boolean; setModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <Modal
      title="라이브러리에 추가"
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      footer={[
        <S.ModalCancelButton key="back" onClick={() => setModalOpen(false)}>
          취소
        </S.ModalCancelButton>,
        <S.ModalOkButton key="submit" onClick={() => setModalOpen(false)}>
          확인
        </S.ModalOkButton>,
      ]}
    ></Modal>
  );
}

export default LibraryModal
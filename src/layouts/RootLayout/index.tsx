import { Container, Main } from "./style";
import SideMenu from "../../components/SideMenu";
import PlayBar from "../../components/PlayBar";
import { Outlet } from "react-router-dom";
import LibraryModal from "../../components/LibraryModal";
import { useModalStateStore } from "../../store/modal/useModalStateStore";
import MobileSideMenu from "../../components/MobileSideMenu";

const RootLayout = () => {
  const modalOpen = useModalStateStore((state) => state.modalOpen);
  const setModalOpen = useModalStateStore((state) => state.setModalOpen);
  const musicData = useModalStateStore((state) => state.musicData);

  return (
    <Container>
      <MobileSideMenu />
      <Main>
        <Outlet />
      </Main>
      <SideMenu />
      <PlayBar />
      {musicData && (
        <LibraryModal
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          music={musicData}
        />
      )}
    </Container>
  );
};

export default RootLayout;

import { Outlet } from "react-router-dom";
import { Container, Main } from "./style";
import SideMenu from "../../components/SideMenu";
import PlayBar from "../../components/PlayBar";

const RootLayout = () => {
  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
      <SideMenu />
      <PlayBar />
    </Container>
  );
};

export default RootLayout;

import { Container, Main } from "./style";
import SideMenu from "../../components/SideMenu";
import PlayBar from "../../components/PlayBar";
import { Outlet } from "react-router-dom";

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

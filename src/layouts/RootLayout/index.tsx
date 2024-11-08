import { Outlet } from "react-router-dom"
import { Container } from "./style"
import SideMenu from "../../components/SideMenu"
import PlayBar from "../../components/PlayBar"

const RootLayout = () => {
  return (
    <Container>
      <Outlet />
      <SideMenu />
      <PlayBar />
    </Container>
  )
}

export default RootLayout
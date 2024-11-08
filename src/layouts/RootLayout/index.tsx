import { Outlet } from "react-router-dom"
import { Container } from "./style"
import SideMenu from "../../components/SideMenu"

const RootLayout = () => {
  return (
    <Container>
      <Outlet />
      <SideMenu />
    </Container>
  )
}

export default RootLayout
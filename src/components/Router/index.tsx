import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Chart from "../../pages/Chart";
import Newest from "../../pages/Newest";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import Playlist from "../../pages/Playlist";
import Intro from "../../pages/Intro";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="newest" element={<Newest />} />
          <Route path="chart" element={<Chart />} />
          <Route path="playlist/:playlistId" element={<Playlist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/intro" element={<Intro /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

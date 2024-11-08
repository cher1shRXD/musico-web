import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "../../layouts/RootLayout";
import Home from "../../pages/Home";
import Search from "../../pages/Search";
import Newest from "../../pages/Newest";
import Chart from "../../pages/Chart";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="newest" element={<Newest />} />
          <Route path="chart" element={<Chart />} />
        </Route>
        <Route path="/login" element />
        <Route path="/signup" element />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

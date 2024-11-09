import { useLocation } from "react-router-dom";
import * as S from "./style";

const SideMenu = () => {
  const location = useLocation();

  return (
    <S.Container>
      <S.Logo src="/assets/musico_reversed.svg" />
      <S.MenuItem to="/" isFocused={location.pathname === "/"}>
        <S.MeunIcon
          src={
            location.pathname === "/"
              ? "/assets/homeIconWhite.svg"
              : "/assets/homeIcon.svg"
          }
        />
        <S.MenuText>홈</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/search" isFocused={location.pathname === "/search"}>
        <S.MeunIcon
          src={
            location.pathname === "/search"
              ? "/assets/searchIconWhite.svg"
              : "/assets/searchIcon.svg"
          }
        />
        <S.MenuText>검색</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/newest" isFocused={location.pathname === "/newest"}>
        <S.MeunIcon
          src={
            location.pathname === "/newest"
              ? "/assets/musicIconWhite.svg"
              : "/assets/musicIcon.svg"
          }
        />
        <S.MenuText>최신음악</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/chart" isFocused={location.pathname === "/chart"}>
        <S.MeunIcon
          src={
            location.pathname === "/chart"
              ? "/assets/chartIconWhite.svg"
              : "/assets/chartIcon.svg"
          }
        />
        <S.MenuText>차트</S.MenuText>
      </S.MenuItem>
      <S.Spacer />
      <S.SectionTitle>라이브러리</S.SectionTitle>
      <S.LibraryItem />
      <S.LibraryItem />
      <S.LibraryItem />
      <S.LibraryItem />
    </S.Container>
  );
};

export default SideMenu;

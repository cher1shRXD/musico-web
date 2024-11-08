import { useLocation } from "react-router-dom";
import * as S from "./style";

const SideMenu = () => {
  const location = useLocation();

  return (
    <S.Container>
      <S.SectionTitle>메뉴</S.SectionTitle>
      <S.MenuItem to="/" isFocus={location.pathname == "/"}>
        <S.MeunIcon
          src={
            location.pathname == "/"
              ? "/assets/homeIconWhite.svg"
              : "/assets/homeIcon.svg"
          }
        />
        <S.MenuText>홈</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/search" isFocus={location.pathname == "/search"}>
        <S.MeunIcon
          src={
            location.pathname == "/search"
              ? "/assets/searchIconWhite.svg"
              : "/assets/searchIcon.svg"
          }
        />
        <S.MenuText>검색</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/newest" isFocus={location.pathname == "/newest"}>
        <S.MeunIcon
          src={
            location.pathname == "/newest"
              ? "/assets/musicIconWhite.svg"
              : "/assets/musicIcon.svg"
          }
        />
        <S.MenuText>최신음악</S.MenuText>
      </S.MenuItem>
      <S.MenuItem to="/chart" isFocus={location.pathname == "/chart"}>
        <S.MeunIcon
          src={
            location.pathname == "/chart"
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

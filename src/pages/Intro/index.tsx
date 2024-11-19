import { useState } from 'react';
import * as S from './style'

const Intro = () => {
  const [id, setId] = useState('');

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }

  return (
    <S.Container>
      <S.Banner>
        <S.Title>MUSICO | 무료 음악 스트리밍 플랫폼</S.Title>
        <S.InputWrap>
          <S.Input
            type="text"
            placeholder="사용하실 아이디를 입력해주세요."
            onChange={handleId}
            value={id}
          />
          <S.Button to={`/signup?id=${id}`}>
            GO <S.ArrowIcon src="/assets/forwardWhite.svg" />
          </S.Button>
        </S.InputWrap>
        <S.Or>OR</S.Or>
        <S.LoginButton to="/login">LOGIN</S.LoginButton>
      </S.Banner>
      <S.IntroduceWrap>
        <S.IntroduceBox>
          <S.Logos src="https://music-phinf.pstatic.net/20240923_133/1727094084949jVo7k_PNG/vibe_og_tag_square3x.png" />
          <S.ServiceName>VIBE</S.ServiceName>
          <S.ServiceUses>
            네이버 바이브를 통해 차트, 신곡, 검색 데이터를 가져옵니다.
          </S.ServiceUses>
        </S.IntroduceBox>
        <S.IntroduceBox>
          <S.Logos src="https://www.youtube.com/img/desktop/yt_1200.png" />
          <S.ServiceName>YOUTUBE</S.ServiceName>
          <S.ServiceUses>
            유튜브를 통해 음원 영상을 임베딩, 재생합니다.
          </S.ServiceUses>
        </S.IntroduceBox>
        <S.IntroduceBox>
          <S.Logos src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcOL9xEuFqTyCai9plC3BxXdUr63YkYgIyg&s" />
          <S.ServiceName>EXPRESS.JS</S.ServiceName>
          <S.ServiceUses>
            express를 통해 빠른 데이터 통신 속도를 지원합니다.
          </S.ServiceUses>
        </S.IntroduceBox>
        <S.IntroduceBox>
          <S.Logos src="https://miro.medium.com/v2/1*qDgpM_HRiSTVluKUHfVVMQ.png" />
          <S.ServiceName>MONGODB ATLAS</S.ServiceName>
          <S.ServiceUses>
            MONGODB ATLAS를 통해 간단한 구조의 데이터를 입출력 합니다.
          </S.ServiceUses>
        </S.IntroduceBox>
        <S.IntroduceBox>
          <S.Logos src="https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png" />
          <S.ServiceName>REACT.JS</S.ServiceName>
          <S.ServiceUses>
            REACT를 사용하여 높은 사용성을 확보했습니다.
          </S.ServiceUses>
        </S.IntroduceBox>
      </S.IntroduceWrap>
    </S.Container>
  );
}

export default Intro
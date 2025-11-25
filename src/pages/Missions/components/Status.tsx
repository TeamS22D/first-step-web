import * as S from "../styles/Status.style"

function Status() {
  return (
    <S.Status>
      <S.StatusBar>
        <S.TextContainer>
          <S.CountOfMission>{"7"}</S.CountOfMission>
          <S.CountSuffix>개</S.CountSuffix>
          <S.RestMission>남은개수 {"7"}개</S.RestMission>
        </S.TextContainer>
        <S.BarEmpty>
          <S.BarFilled size="30" />
        </S.BarEmpty>
      </S.StatusBar>
        <S.Stat>
          <S.StatRow>
            <S.Box>
              테스트
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                7
              </S.StatHighlight>
               / 10개
            </S.StatText>
          </S.StatRow>
          <S.StatRow>
            <S.Box>
              테스트
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                7
              </S.StatHighlight>
               / 10개
            </S.StatText>
          </S.StatRow>
          <S.StatRow>
            <S.Box>
              테스트
            </S.Box>
            <S.StatText>
              <S.StatHighlight>
                7
              </S.StatHighlight>
               / 10개
            </S.StatText>
          </S.StatRow>
        </S.Stat>
    </S.Status>
  )
}

export default Status
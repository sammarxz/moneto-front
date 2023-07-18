import { Logo } from "../";

import * as S from "./styles";

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
        <S.Button>Nova transação</S.Button>
      </S.Content>
    </S.Wrapper>
  );
}

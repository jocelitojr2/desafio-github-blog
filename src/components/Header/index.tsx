import { HeaderContainer, HeanderContent } from "./styles";

import logoImg from "../../assets/logo.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeanderContent>
        <img src={logoImg} alt="" />
      </HeanderContent>
    </HeaderContainer>
  )
}
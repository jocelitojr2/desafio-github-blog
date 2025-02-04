import styled from "styled-components";
import backgroundSvg from "../../assets/headerBackground.svg";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["base-profile"]};
  background-image: url(${backgroundSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 2.5rem 0 7.5rem;
`;

export const HeanderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

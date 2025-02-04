import styled from "styled-components";

export const PostSummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  display: flex;
  align-items: center;
  margin-top: -5rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
`;

export const PostSummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    & span {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme["base-title"]};
    }

    & a {
      display: flex;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: ${(props) => props.theme.blue};
      text-decoration: none;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  & strong {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const PostSummarySocialList = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  & li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

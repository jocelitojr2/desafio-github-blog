import styled from "styled-components";

export const IssuesContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
`;

export const IssuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(416px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const IssueItem = styled.li`
  display: flex;

  & a {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;
    background-color: ${(props) => props.theme["base-post"]};
    color: ${(props) => props.theme["base-title"]};
    text-decoration: none;
    border: 2px solid transparent;
    width: 100%;

    & header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 1rem;
      gap: 1rem;

      & strong {
        font-weight: bold;
        font-size: 1.25rem;
        width: 80%;
        text-align: left;
      }

      & span {
        font-size: 0.875rem;
        color: ${(props) => props.theme["base-span"]};
      }
    }

    & p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }

    &:hover {
      border: 2px solid ${(props) => props.theme["base-label"]};
    }
  }
`;

import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  & blockquote {
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;

    & img {
      width: -webkit-fill-available;
    }

    & a {
      color: ${(props) => props.theme.blue};
    }

    & p {
      margin-bottom: 1rem;
    }

    & h2,
    & h3 {
      margin-bottom: 0.5rem;
    }
  }
`;

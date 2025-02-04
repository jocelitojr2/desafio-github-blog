import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;

export const SearchFormTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  & h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

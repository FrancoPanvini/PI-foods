import styled from "styled-components";

export const Container = styled.div`
  display: block;
  text-align: left;

  color: var(--italian-flag-white);

  & h4 {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  & label {
    text-transform: capitalize;
    & input {
        margin: .2rem 1rem 0 1rem;
    }
  }
`;

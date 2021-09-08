import styled from "styled-components";

export const Container = styled.div`
  display: block;
  text-align: center;

  color: var(--italian-flag-white);

  & h4 {
    margin-bottom: 0.5rem;
  }
`;

export const Select = styled.select`
//   appearance: none;

  width: 70%;
  text-align: center;
  text-transform: Capitalize;
  font-weight: 500;

  border: transparent 2px;
  border-radius: 2em;
  padding: .5rem 0;
`;

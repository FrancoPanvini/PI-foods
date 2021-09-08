import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Bar = styled.input`
  width: 80%;

  text-align: center;
  text-transform: Capitalize;
  font-weight: 500;

  border: solid 2px var(--other-color);
  border-radius: 2em;
  padding: 1em 0;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  width: 2rem;

  background-color: var(--italian-flag-white);
  opacity: 0.5;
  border: transparent 2px;
  border-radius: 9999px;
  margin: 0;
  margin-left: 0.3rem;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

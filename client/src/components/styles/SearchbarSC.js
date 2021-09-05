import styled from "styled-components";

export const Bar = styled.input`
  //   margin: 0.5rem 1rem 0.5rem 1rem;
  //   margin: 0;
  width: 70%;

  text-align: center;
  text-transform: Capitalize;
  //   font-family: var(--global-font);
  font-weight: 500;
  //   color: var(--font-color);

  //   background-color: transparent;

  border: solid 2px var(--other-color);
  border-radius: 2em;
  padding: 1em 0;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;

  font-family: var(--global-font);
  font-weight: 500;
  font-size: small;
  color: var(--font-color);

  background-color: var(--background-color2);
  opacity: 0.5;
  border: transparent 2px;
  border-radius: 9999px;
  padding: 2px 10px;
  margin: 0 1rem 0 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

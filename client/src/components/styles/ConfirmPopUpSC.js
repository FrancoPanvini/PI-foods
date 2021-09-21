import styled from "styled-components";

export const PopUp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;

  width: 40vw;
  height: 25vh;

  font-size: 25px;
  text-align: center;

  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(19.5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  & p {
    margin: 1.5rem;
  }
`;

export const Button = styled.button`
  margin: 1rem 1rem;
  padding: 0.5rem;
  background-color: var(--italian-flag-red-traslucent);
  border: 2px solid transparent;
  border-radius: 1.2rem;
  color: var(--italian-flag-white);
  cursor: pointer;
  &:hover {
    background-color: var(--italian-flag-red);
  }
`;

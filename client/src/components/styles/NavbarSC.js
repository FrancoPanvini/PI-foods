import styled from "styled-components";

//! TODO A REVISAR

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 6rem;

  background-color: black;
  opacity: 0.98;

  display: grid;
  grid-template-columns: 28em 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  gap: 0 3em;
  grid-auto-flow: row;

  box-shadow: -5px -5px 10px #9b9b9b, 5px 5px 10px grey;
`;

export const Image = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  margin: 0 5px;

  /* Animation */

  &:hover {
    -webkit-animation: jello-horizontal 1s ease-in-out;
    animation: jello-horizontal 1s ease-in-out;
  }

  /* End Animation */
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    text-decoration: none;
    margin-right: 1.5rem;
  }
`;

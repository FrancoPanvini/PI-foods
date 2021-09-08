import styled from "styled-components";

//? ANIMATIONS
import navbarAnimation from "./animations/navbarAnimation";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  max-height: 6rem;

  display: grid;
  grid-template-columns: 28em 1fr;
  grid-template-rows: 1fr;
  grid-auto-rows: 1fr;
  gap: 0 3em;
  grid-auto-flow: row;

  /* Animation */
  -webkit-animation: slide-bottom 0.5s ease-in both;
  animation: slide-bottom 0.5s ease-in both;
  ${navbarAnimation};
  /* End Animation */
`;

export const NavbarImage = styled.img`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 18vh;
`;

export const Icon = styled.img`
  height: 5.5rem;
  margin: 0 5px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: var(--italian-flag-white);
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: var(--italian-flag-white);
    text-decoration: none;
    margin-right: 1.5rem;
  }
`;

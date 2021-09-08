import styled from "styled-components";

//? ANIMATIONS
import sidebarAnimation from "./animations/sidebarAnimation";

export const Bar = styled.div`
  position: fixed;
  top: 12vh;
  right: 0;
  width: 17em;
  height: 100vh;
  background-color: var(--italian-flag-green);
  padding: 0.5rem;
  padding-top: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem 2rem 4rem 1fr;
  gap: 2rem;

  /* Animation */
  -webkit-animation: slide-left 1s ease-in both;
  animation: slide-left 1s ease-in both;
  ${sidebarAnimation};
  /* End Animation */
`;

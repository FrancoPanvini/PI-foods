import styled from "styled-components";

import chefAnimation from "./animations/chefAnimation";

export const Chef = styled.img`
  position: absolute;
  top: 20vh;
  left: 20vw;
  height: 70vh;

  /* Animation */

  -webkit-animation: slide-top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: slide-top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  ${chefAnimation}/* End Animation */
`;

export const Burbuja = styled.div`
  position: relative;
  top: 10vh;
  left: 50vw;
  height: 30vh;
  width: 30vw;
  border: solid 2px black;
`;

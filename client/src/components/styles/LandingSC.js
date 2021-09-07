import styled from "styled-components";

//? ANIMATIONS
import chefAnimation from "./animations/chefAnimation";
import bubbleAnimation from "./animations/bubbleAnimation";

export const Chef = styled.img`
  position: relative;
  top: 20vh;
  left: 20vw;
  height: 70vh;

  /* Animation */
  -webkit-animation: slide-top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: slide-top 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  ${chefAnimation};
  /* End Animation */
`;

export const Burbuja = styled.div`
  position: absolute;
  top: 0vh;
  left: 41vw;

  & img {
    height: 60vh;
    width: 40vw;
  }

  & div {
    position: absolute;
    top: 5vh;
    left: 0vw;
    width: 40vw;

    text-align: center;
  }

  & h1 {
    font-size: 3rem;
  }

  & h4 {
    font-size: 1.5rem;
  }

  & a {
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    color: var(--italian-flag-red);
    & :hover {
      color: var(--italian-flag-green);
    }
    & :visited {
      color: var(--italian-flag-red);
    }
  }

  /* Animation */
  -webkit-animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
  animation: scale-up-center 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 2s both;
  ${bubbleAnimation};
  /* End Animation */
`;

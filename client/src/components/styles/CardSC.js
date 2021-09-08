import styled from "styled-components";

//? ANIMATIONS
import cardAnimation from "./animations/cardAnimation";

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 70% 15% 15%;
  grid-auto-flow: column;
  grid-template-areas:
    "Imagen Imagen Imagen Imagen"
    "Title Title Title Title"
    "Time Score HealthScore Author";
  justify-items: center;
  align-items: center;

  width: 300px;
  height: 250px;
  margin: 1vw 1.5vw;

  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(19.5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  /* Animation */
  -webkit-animation: fade-in 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  ${cardAnimation};
  /* End Animation */
`;

export const Image = styled.img`
  grid-area: Imagen;
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Title = styled.div`
  grid-area: Title;
  margin: 0;
  & a {
    text-decoration: none;
    color: black;
    text-align: center;
    text-transform: capitalize;
    &:hover {
      color: var(--italian-flag-green);
    }
  }
`;

export const Time = styled.div`
  grid-area: Time;
  margin: 0;

  text-align: center;
  font-size: 0.9rem;
`;

export const Score = styled.div`
  grid-area: Score;
  margin: 0;

  text-align: center;
  font-size: 0.9rem;
`;

export const HealthScore = styled.div`
  grid-area: HealthScore;
  margin: 0;

  text-align: center;
  font-size: 0.9rem;
`;

export const Author = styled.div`
  grid-area: Author;
  margin: 0;

  text-align: center;
  font-size: 0.9rem;
`;

import styled from "styled-components";

//? ANIMATIONS
import cardAnimation from "./animations/cardAnimation";

export const Container = styled.div`
  position: relative;
  top: 8rem;

  width: 80vw;
  margin: auto;

  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-rows: 15vh 10vh 10vh 10vh auto auto auto;
  grid-auto-flow: row;
  grid-template-areas:
    "Title Title Imagen"
    "Time Servings  Imagen"
    "Score HealthScore Imagen"
    "Diets Diets Imagen"
    "Summary Summary Summary"
    "Ingredients Ingredients Ingredients"
    "Procedure Procedure Procedure";
  justify-items: center;
  align-items: center;

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

export const Title = styled.div`
  grid-area: Title;
  margin: 0;
  & h1 {
    text-decoration: none;
    color: black;
    text-align: center;
    text-transform: capitalize;
  }
`;

export const Image = styled.img`
  grid-area: Imagen;
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: cover;
  border-top-right-radius: 15px;
`;

export const Time = styled.div`
  grid-area: Time;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
`;

export const Servings = styled.div`
  grid-area: Servings;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
`;

export const Score = styled.div`
  grid-area: Score;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
`;

export const HealthScore = styled.div`
  grid-area: HealthScore;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
`;

export const Diets = styled.div`
  grid-area: Diets;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & span {
    margin: 0.5rem;
    padding: 0.2rem;
    border: solid 1px transparent;
    border-radius: 0.8rem;
    background-color: var(--italian-flag-green);
    color: var(--italian-flag-white);
  }
`;

export const Summary = styled.div`
  grid-area: Summary;
  margin: 1vh 2vw;
  width: 90%;

  text-align: justify;
  font-size: 1.2rem;
  & h3 {
    margin-bottom: 1rem;
  }
`;

export const Ingredients = styled.div`
  grid-area: Ingredients;
  margin: 1vh 2vw;
  width: 90%;

  text-align: justify;
  font-size: 1.2rem;

  & h3 {
    margin: 1rem 0;
  }

  & li {
    list-style-type: none;
  }
`;

export const Procedure = styled.div`
  grid-area: Procedure;
  margin: 1vh 2vw;
  width: 90%;

  text-align: justify;
  font-size: 1.2rem;

  & h3 {
    margin: 1rem 0;
  }
`;

export const Loader = styled.div`
  position: relative;
  grid-column: 1 / span 3;
  margin: 0;
  margin-left: -10vw;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    border: 12px solid #fff;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: var(--italian-flag-green) transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

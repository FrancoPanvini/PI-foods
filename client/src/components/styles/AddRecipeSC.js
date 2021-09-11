import styled from "styled-components";

//? ANIMATIONS
import cardAnimation from "./animations/cardAnimation";

export const Container = styled.div`
  position: relative;
  top: 8rem;

  width: 80vw;
  margin: auto;
  padding-bottom: 2rem;

  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-rows: 10vh 10vh 10vh auto auto auto auto;
  grid-auto-flow: row;
  grid-template-areas:
    "Title Title Imagen"
    "Time Servings  Imagen"
    "Score HealthScore Imagen"
    "Diets Diets Diets"
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

  & .error {
    color: var(--italian-flag-red);
    font-weight: bold;
    font-size: 0.8rem;
  }

  & .uploaded {
    background-color: var(--italian-flag-green);
    font-size: 1.5rem;
    transition: 1s;
    cursor: default;
  }
`;

export const Title = styled.div`
  grid-area: Title;
  margin: 0;

  & label {
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & input {
    display: block;
    width: 35vw;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;
  }
`;

export const Image = styled.div`
  grid-area: Imagen;
  margin: 0;

  & label {
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & textarea {
    display: block;
    width: 35vw;
    height: 20vh;
    padding: 0.5rem;

    border: 1px solid grey;
    border-radius: 0.7rem;
    background: none;

    outline: none;
  }
`;

export const Time = styled.div`
  grid-area: Time;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
  color: grey;

  & input {
    display: block;
    width: 4vw;
    text-align: center;
    margin: auto;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;

    &::-webkit-inner-spin-button {
      opacity: 1;
    }
  }
`;

export const Servings = styled.div`
  grid-area: Servings;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
  color: grey;

  & input {
    display: block;
    width: 4vw;
    text-align: center;
    margin: auto;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;

    &::-webkit-inner-spin-button {
      opacity: 1;
    }
  }
`;

export const Score = styled.div`
  grid-area: Score;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
  color: grey;

  & input {
    display: block;
    width: 4vw;
    text-align: center;
    margin: auto;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;

    &::-webkit-inner-spin-button {
      opacity: 1;
    }
  }
`;

export const HealthScore = styled.div`
  grid-area: HealthScore;
  margin: 0;

  text-align: center;
  font-size: 1.2rem;
  color: grey;

  & input {
    display: block;
    width: 4vw;
    text-align: center;
    margin: auto;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;

    &::-webkit-inner-spin-button {
      opacity: 1;
    }
  }
`;

export const Diets = styled.div`
  grid-area: Diets;
  margin: 0;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > label {
    display: block;
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & label {
      margin: 0.5rem;
      padding: 0.2rem 0.8rem 0.2rem 0.2rem;
      border: solid 1px transparent;
      border-radius: 0.8rem;
      background-color: var(--italian-flag-green);
      color: var(--italian-flag-white);

      & input {
        margin: 0 0.5rem;
        border: none;
        background: none;

        // outline: none;
      }
    }
  }
`;

export const Summary = styled.div`
  grid-area: Summary;
  margin: 0;

  & label {
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & textarea {
    display: block;
    width: 75vw;
    height: 15vh;
    padding: 0.5rem;

    border: 1px solid grey;
    border-radius: 0.7rem;
    background: none;

    line-height: 1.5rem;
    outline: none;
  }
`;

export const Ingredients = styled.div`
  grid-area: Ingredients;
  margin: 0;

  & div {
    margin: 0.5rem;
    width: 75vw;
    & select {
      width: 15vw;
      margin-right: 2rem;

      border: none;
      border-bottom: 1px solid grey;
      background: none;

      outline: none;
    }

    & > input[type="number"] {
      width: 4vw;
      text-align: left;
      margin-right: 0.5rem;

      border: none;
      border-bottom: 1px solid grey;
      background: none;

      outline: none;

      &::-webkit-inner-spin-button {
        opacity: 1;
      }
    }

    & > input[type="text"] {
      width: 2vw;

      border: none;
      border-bottom: 1px solid grey;
      background: none;

      outline: none;
    }
  }

  & label {
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & button {
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;

    background-color: grey;
    border: 1px solid transparent;
    border-radius: 50%;

    color: lightgrey;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: var(--italian-flag-green);
    }
  }
`;

export const Procedure = styled.div`
  grid-area: Procedure;
  margin: 0.5rem;
  width: 75vw;

  & label {
    color: grey;
    text-transform: uppercase;
    font-weight: bold;
  }

  & button {
    margin-left: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;

    background-color: grey;
    border: 1px solid transparent;
    border-radius: 50%;

    color: lightgrey;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: var(--italian-flag-green);
    }
  }

  & input {
    margin-bottom: 0.7rem;
    width: 100%;

    border: none;
    border-bottom: 1px solid grey;
    background: none;

    outline: none;
  }
`;

export const Button = styled.button`
  grid-column: 1 / span 3;
  margin: auto;
  padding: 0.5rem;
  background-color: var(--italian-flag-red);
  border: 2px solid transparent;
  border-radius: 1.2rem;
  color: var(--italian-flag-white);
  cursor: pointer;
  &:hover {
    background-color: var(--italian-flag-green);
  }
`;

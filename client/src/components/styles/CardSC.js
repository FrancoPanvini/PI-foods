import styled from "styled-components";

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
  border: solid 2px black;
  margin: 1vw;

  background-color: grey;
`;

export const Image = styled.img`
  grid-area: Imagen;
  height: 100%;
  width: 100%;
  margin: 0;
  object-fit: cover;
`;

export const Title = styled.div`
  grid-area: Title;
  margin: 0;
`;

export const Time = styled.div`
  grid-area: Time;
  margin: 0;
`;
export const Score = styled.div`
  grid-area: Score;
  margin: 0;
`;
export const HealthScore = styled.div`
  grid-area: HealthScore;
  margin: 0;
`;
export const Author = styled.div`
  grid-area: Author;
  margin: 0;
`;

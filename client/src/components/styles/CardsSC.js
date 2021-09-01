import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 6rem;

  display: grid;
  grid-template-columns: 1fr 17em;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

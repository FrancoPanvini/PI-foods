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
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Loader = styled.div`
  position: relative;
  top: 20vh;
  left: 35vw;

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

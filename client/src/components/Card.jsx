import React from "react";

import { Container, Image, Title, Time, Score, HealthScore, Author } from "./styles/CardSC";

function Card({ image, title, readyInMinutes, score, healthScore, source }) {
  return (
    <Container>
      <Image src={image} alt="not available" />
      <Title>
        <h4>{title}</h4>
      </Title>
      <Time>
        <p>{readyInMinutes} min</p>
      </Time>
      <Score>
        <p>{score}</p>
      </Score>
      <HealthScore>
        <p>{healthScore}</p>
      </HealthScore>
      <Author>
        <p>{source}</p>
      </Author>
    </Container>
  );
}

export default Card;

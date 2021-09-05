import React from "react";
import { Link } from "react-router-dom";

import { Container, Image, Title, Time, Score, HealthScore, Author } from "./styles/CardSC";

function Card({ id, image, title, readyInMinutes, score, healthScore, source }) {
  return (
    <Container>
      <Image src={image} alt="not available" />
      <Title>
        <Link to={`/home/recipe/${source}/${id}`}>
          <h4>{title}</h4>
        </Link>
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

import React from "react";
import { Link } from "react-router-dom";

//? STYLES
import { Container, Image, Title, Time, Score, HealthScore, Author } from "./styles/CardSC";
import { BiTimeFive } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { GiHealthNormal } from "react-icons/gi";
import { FaUtensilSpoon } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";

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
        <BiTimeFive />
        <p>{readyInMinutes} min</p>
      </Time>
      <Score>
        <BsStar />
        <p>{score}</p>
      </Score>
      <HealthScore>
        <GiHealthNormal />
        <p>{healthScore}</p>
      </HealthScore>
      <Author>{source === "spoon" ? <FaUtensilSpoon /> : <FiDatabase />}</Author>
    </Container>
  );
}

export default Card;

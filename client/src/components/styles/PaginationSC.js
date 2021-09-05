import styled from "styled-components";

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

export const PageNumber = styled.li`
  padding: 0.5rem;
  border: 1px solid white;
  cursor: pointer;

  &.active {
    background-color: white;
  }
`;

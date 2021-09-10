import styled from "styled-components";

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  justify-content: center;
  align-items: stretch;
`;

export const PageNumber = styled.li`
  font-size: 1rem;
  color: var(--italian-flag-white);
  cursor: pointer;
  margin: 0.4rem;

  &.active {
    font-weight: bold;
  }

  &:hover {
    transition: 0.4s;
    font-size: 1.6rem;
    margin: 0.1rem;
  }
`;

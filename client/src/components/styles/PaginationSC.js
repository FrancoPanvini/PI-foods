import styled from "styled-components";

export const PagesList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;

  justify-content: center;
  align-items: stretch;
`;

export const PageNumber = styled.li`
  padding: 0.5rem;
  font-size: 1.5rem;
  color: var(--italian-flag-white);
  cursor: pointer;

  &.active {
    font-weight: bold;
  }

  &:hover {
    transition: 0.4s;
    font-size: 2rem;
  }
`;

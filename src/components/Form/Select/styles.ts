import styled from 'styled-components';

export const SelectStyle = styled.select`
  border: 1px solid var(--white);
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  color: var(--white);
  padding: 10px;
  min-width: 400px;

  option {
    background-color: var(--darkGrey);
    color: var(--white);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

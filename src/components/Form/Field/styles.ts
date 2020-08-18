import styled from 'styled-components';

export const Input = styled.input`
  border: 1px solid var(--white);
  border-radius: 8px;
  background-color: transparent;
  font-size: 1rem;
  color: var(--white);
  padding: 10px;
  min-width: 400px;

  &[type="url"]{
    border: 1px solid var(--white);
    border-radius: 8px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

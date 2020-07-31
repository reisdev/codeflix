import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  color: white;
  display: flex;
  height: fit-content;
  padding: 10px 20px;
  align-items: center;
  background-color: #181818;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  &::after {
    display: block;
    position: absolute;
    bottom: -4px;
    left: 0;
    content: "";
    width: calc(100% - 4px);
    border: 2px solid var(--purple);      
  }
`;

export const Title = styled.h1`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;

export const Logo = styled.img`
  height: 55px;
  width: auto;
`

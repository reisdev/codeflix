import React from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import { Container, Logo, Title } from './styles';

const Header: React.SFC = () => {
  return (
    <Container>
      <Title>Codeflix</Title>
      <Link to="/" title="Página inicial">
        <Logo src={process.env.REACT_APP_LOGO_URL} alt="Codeflix logo, netflix style" />
      </Link>
      <Menu />
    </Container>
  );
};

export default Header;

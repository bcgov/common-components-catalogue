import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Routes } from '@/constants';
import Logo from '@/assets/logo.svg';

const Header = () => (
  <Container fluid className="header px-1">
    <Row className="mx-1">
      <Link to={Routes.Intro} className="header__logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <Link to={Routes.Intro} className="header__nav-item">Common Components Catalogue</Link>
      <Link to={Routes.Intro} className="header__nav-item">About</Link>
      <Link to={Routes.ListView} className="header__nav-item">Catalogue</Link>
    </Row>
  </Container>
);

export default Header;

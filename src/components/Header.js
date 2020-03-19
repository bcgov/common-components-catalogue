import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { Routes } from '@/constants';

const Header = () => (
  <Container fluid className="header px-1">
    <Nav>
      <Nav.Item>
        <Nav.Link className="header__nav-item header__logo" as={Link} to={Routes.Intro}><img src={logo} alt="Logo" /></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="header__nav-item" as={Link} to={Routes.Intro}>Common Components Catalogue</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="header__nav-item" as={Link} to={Routes.ListView}>Components</Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
);

export default Header;

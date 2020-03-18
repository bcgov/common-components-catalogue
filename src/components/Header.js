import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { Routes } from '@/constants';
import Logo from '@/assets/logo.svg';

const Header = () => (
  <Container fluid className="header px-1">
    <Nav>
      <Nav.Item>
        <Nav.Link className="header__nav-item header__logo" alt="Logo" as={Link} to={Routes.Intro}><img src={Logo}/></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="header__nav-item" as={Link} to={Routes.Intro}>Common Components Catalogue</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="header__nav-item" as={Link} to={Routes.ListView} >List View</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="header__nav-item" as={Link} to={Routes.DetailView} >Detail View</Nav.Link>
      </Nav.Item>
    </Nav>
  </Container>
);

export default Header;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/assets/images/logo.svg';
import { Routes } from '@/constants';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <Navbar className="header" collapseOnSelect expand="md" variant="dark">
      <Container>
        <Navbar.Brand
          as={Link}
          to={Routes.Intro}
        >
          <img
            className="header__logo"
            src={logo}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Link
              className={classNames('header__nav-item', { 'header__nav-item--selected': pathname === Routes.Intro })}
              as={Link}
              to={Routes.Intro}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={classNames('header__nav-item', { 'header__nav-item--selected': pathname === Routes.ListView })}
              as={Link}
              to={Routes.ListView}
            >
              Catalogue
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

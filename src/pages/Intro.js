import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import { Routes } from '@/constants';
import Container from 'react-bootstrap/Container';


const Intro = () => (
  <Container fluid>
    <div className="intro">
      <h1 className="intro__title">Intro Page</h1>
      <Link to={Routes.ListView}>Go to List page</Link>
    </div>
  </Container>
);

export default Intro;

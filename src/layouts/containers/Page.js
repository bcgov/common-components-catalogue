import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '@/components/reusable/Header';

const Intro = (props) => (
  <Container fluid>
    <Row>
      <Header/>
    </Row>
    <Row className="page__content">
      {props.children}
    </Row>
  </Container>
);

export default Intro;

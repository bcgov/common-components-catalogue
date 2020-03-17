import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '@/components/Header';

const Page = ({ children }) => (
  <Container className="page" fluid>
    <Row>
      <Header/>
    </Row>
    <Row className="page__content">
      {children}
    </Row>
  </Container>
);

export default Page;

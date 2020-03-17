import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PaneContainer = ({ mainContent, sideContent }) => (
  <Container fluid>
    <Row>
      <Col xs={8}>{mainContent}</Col>
      <Col xs={4}>{sideContent}</Col>
    </Row>
  </Container>
);

export default PaneContainer;

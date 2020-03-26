import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PaneContainer = ({ mainContent, sideContent }) => (
  <div className="detail-view shadow-sm border rounded p-3">
    <Row>
      <Col md={8} className="detail-view__main-content">{mainContent}</Col>
      <Col md={4}>{sideContent}</Col>
    </Row>
  </div>
);

export default PaneContainer;

import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const ListItem = () => (
  <Card className="mb-3">
    <Card.Header as="h5">
      Sample Component
    <div className="float-right">
      <Badge pill={true} variant="secondary">Component</Badge>
    </div>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        <div>
          <Row className="mb-2">
            <Col sm={3} lg={2}>
              <strong>Short Description:</strong>
            </Col>
            <Col sm={9} lg={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Col>
          </Row>
          <Row className="mb-2">
            <Col sm={3} lg={2}>
              <strong>Long Description:</strong>
            </Col>
            <Col sm={9} lg={10}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Col>
          </Row>
        </div>
      </Card.Text>
      <hr />
      <Badge pill={true} variant="dark">Boilerplate</Badge>&nbsp;
      <Badge pill={true} variant="dark">Other</Badge>
    </Card.Body>
  </Card>
);

export default ListItem;

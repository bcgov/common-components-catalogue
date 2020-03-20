import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory } from 'react-router-dom';

import getTag from '@/service/get-tag';
import { Routes } from '@/constants';

const ListItem = ({ component }) => {
  const history = useHistory();

  const renderKeyStats = component.keyStats.map((stat) => (
    <ListGroup.Item key={stat.id}>{stat.name}: {stat.value}</ListGroup.Item>
  ));

  const renderTags = component.tags.map((tagId) => (
    <Badge pill={true} variant="dark" key={tagId} className="mr-1">{getTag(tagId).value}</Badge>
  ));

  const handleClick = () => history.push(Routes.DetailView.dynamicRoute(component.id));

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">
        {component.name}
      </Card.Header>
      <Card.Body>
        <ListGroup horizontal="md" className="mb-3">
          <ListGroup.Item><strong>Key Stats</strong></ListGroup.Item>
          {renderKeyStats}
        </ListGroup>
        <hr />
        <p>{component.shortDescription}</p>
        <Row className="mb-2">
          <Col sm={3} lg={2}>
            <strong>Repo Link:</strong>
          </Col>
          <Col sm={9} lg={10}>
            <a
              href={component.gitHubLink}
              title="Repository Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {component.gitHubLink}
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={8}>
            {renderTags}
          </Col>
          <Col md={4} className="text-center pt-3 pt-md-0">
            <Button
            className="float-md-right d-block d-md-inline-block mx-auto"
            variant="primary"
            onClick={handleClick}
          >
            View Details
          </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListItem;

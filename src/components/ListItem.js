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

        <ListGroup horizontal className="mb-2">
          <ListGroup.Item><strong>Key Stats</strong></ListGroup.Item>
          {renderKeyStats}
        </ListGroup>
        <hr />
        <Row className="mb-2">
          <Col sm={3} lg={2}>
            <strong>Short Description:</strong>
          </Col>
          <Col sm={9} lg={10}>
            {component.shortDescription}
          </Col>
        </Row>
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
        {renderTags}
        <Button
          className="float-right"
          variant="primary"
          onClick={handleClick}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListItem;

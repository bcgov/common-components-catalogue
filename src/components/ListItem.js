import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

import getTag from '@/service/get-tag';
import { Routes } from '@/constants';

const ListItem = ({ component }) => {
  const history = useHistory();

  const renderKeyStats = component.keyStats.map((stat) => (
    <Col sm={4} key={stat.id}>{stat.name}: {stat.value}</Col>
  ));

  const renderTags = component.tags.map((tagId) => (
    <Badge pill={true} variant="dark" key={tagId} className="mr-1">{getTag(tagId).value}</Badge>
  ));

  const handleClick = () => history.push(Routes.DetailView.dynamicRoute(component.id));

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Header as="h5">
        {component.name}
      </Card.Header>
      <Card.Body>
        <strong>Key Stats</strong>
        <Row className="mb-2">
          {renderKeyStats}
        </Row>
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
          View
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListItem;

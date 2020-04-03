import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { useHistory, Link } from 'react-router-dom';

import getTag from '@/service/get-tag';
import CoCoLinkAttribute from '@/components/CoCoLinkAttribute';
import { Routes } from '@/constants';

const ListItem = ({ component }) => {
  const history = useHistory();

  const renderKeyStats = component.keyStats.map((stat) => (
    <ListGroup.Item key={stat.id}>{stat.name}: {stat.value}</ListGroup.Item>
  ));

  const renderTags = component.tags.map((tagId) => (
    <Badge pill={true} variant="dark" key={tagId} className="mr-1">
      <Link className="p-1 d-block text-white" to={Routes.TagView.dynamicRoute(tagId)} >{getTag(tagId).value}</Link>
    </Badge>
  ));

  const handleClick = () => history.push(Routes.DetailView.dynamicRoute(component.id));

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Header as="h5">
        <Link to={Routes.DetailView.dynamicRoute(component.id)} >{component.name}</Link>
      </Card.Header>
      <Card.Body>
        <ListGroup horizontal="md" className="mb-3">
          <ListGroup.Item><strong>Key Stats</strong></ListGroup.Item>
          {renderKeyStats}
        </ListGroup>
        <hr />
        <p>{component.shortDescription}</p>
        <CoCoLinkAttribute link={component.gitHubLink} label="GitHub Link" />
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

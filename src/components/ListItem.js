import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { useHistory } from 'react-router-dom';

import getTag from '@/service/get-tag';

const ListItem = ({component}) => {
  
  const keyStats = component.keyStats.map((stat) => (
    <Col sm={4} key={stat.id} >{stat.name}: {stat.value}</Col>
  ));

  const tags = component.tags.map((tagId) => (
    <Badge pill={true} variant="dark" key={tagId} className="mr-1" >{getTag(tagId).value}</Badge>
  ));

  return (
    <Card className="mb-3 shadow-sm" >
    <Card.Header as="h5">
      {component.name}
    {/* <div className="float-right">
      <Badge pill={true} variant="secondary">Boilerplate</Badge>
    </div> */}
    </Card.Header>
    <Card.Body>
      <div>
        <strong>Key Stats</strong>
        <Row className="mb-2">
          {keyStats}
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
      </div>
        <Row className="mb-2">
          <Col sm={3} lg={2}>
            <strong>Repo Link:</strong>
          </Col>
          <Col sm={9} lg={10}>
            <a href={component.gitHubLink} title="Repository Link"
              target="_blank" >{component.gitHubLink}
            </a>
          </Col>
        </Row>
      <hr />
      {tags}
    </Card.Body>
  </Card>
)
};

export default ListItem;

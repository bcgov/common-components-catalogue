import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';

import componentsJson from '@/service/data/components.json';
import placeholderImage from '@/assets/images/placeholder.svg';
import getTag from '@/service/get-tag';

import Page from '@/layouts/Page';
import PaneContainer from '@/layouts/PaneContainer';

const DetailView = () => {
  const { id } = useParams();

  const matchingCoCo = componentsJson.find((item) => item.id === parseInt(id));
  const name = matchingCoCo.name || 'N/A';
  const abbreviation = matchingCoCo.abbreviation || 'N/A';
  const gitHubLink = matchingCoCo.gitHubLink || null;
  const supportAgreement = matchingCoCo.supportAgreement || null;
  const sampleImplementationLink = matchingCoCo.sampleImplementationLink || null;
  const longDescription = matchingCoCo.longDescription || 'N/A';
  const tags = matchingCoCo.tags || [];
  const keyStats = matchingCoCo.keyStats || [];
  const testimonials = matchingCoCo.testimonials || [];

  const renderTags = tags.map((tagId) => (
    <Badge key={tagId} className="ml-1 mr-1" variant="dark">
      {getTag(tagId).value}
    </Badge>
  ));

  const renderTestimonials = testimonials.map((item, index) => (
    <Col key={index} xs>
      <blockquote>&quot;{item.quotation}&quot;</blockquote>
      <p>Hours saved: {item.hoursSaved}</p>
    </Col>
  ));

  const renderKeyStats = keyStats.map((item) => (
    <ListGroup.Item key={item.name} >{item.name}: {item.value}</ListGroup.Item>
  ));

  const renderMainContent = (
    <section>
      <Row>
        <Col xs="auto">
          <Image src={placeholderImage} rounded />
        </Col>
        <Col>
          <h1 className="h2">{name} ({abbreviation})</h1>
          <p>
            <strong>GitHub Link: </strong>
            <a href={gitHubLink} rel="noopener noreferrer" target="_blank">{gitHubLink}</a>
          </p>
          <p>
            <strong>Support Agreement: </strong>
            <a href={supportAgreement} rel="noopener noreferrer" target="_blank">{supportAgreement || 'N/A'}</a>
          </p>
          <p>
            <strong>Sample Implementation Link: </strong>
            <a href={sampleImplementationLink} rel="noopener noreferrer" target="_blank">{sampleImplementationLink || 'N/A'}</a>
          </p>
          {renderTags}
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <Col xs={12}>
          <h2>Description</h2>
        </Col>
        <Col xs={12}>
          <p>{longDescription}</p>
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <Col sm={12}>
          <h2>Testimonials</h2>
        </Col>
        {renderTestimonials}
      </Row>
    </section>
  );

  const renderSideContent = (
    <aside className="p-2">
      <h2 className="mb-4">Key stats:</h2>
      <ListGroup>
        {renderKeyStats}
      </ListGroup>
    </aside>
  );

  return (
    <Page>
      <PaneContainer
        mainContent={renderMainContent}
        sideContent={renderSideContent}
      />
    </Page>
  );
};

export default DetailView;

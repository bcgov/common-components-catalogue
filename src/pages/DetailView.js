import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';

import Components from '@/service/data/components.json';
import PlaceholderImage from '@/assets/placeholder.svg';
import getTag from '@/service/get-tag';
import Page from '@/layouts/Page';
import PaneContainer from '@/layouts/PaneContainer';

const DetailView = () => {
  const { id } = useParams();

  const matchingCoCo = Components.find((item) => item.id === parseInt(id));
  const name = matchingCoCo.name || 'N/A';
  const abbreviation = matchingCoCo.abbreviation || 'N/A';
  const gitHubLink = matchingCoCo.gitHubLink || null;
  const supportAgreement = matchingCoCo.supportAgreement || null;
  const sampleImplementationLink = matchingCoCo.sampleImplementationLink || null;
  const shortDescription = matchingCoCo.shortDescription || 'N/A';
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
      <p>&quot;{item.quotation}&quot;</p>
      <p>Hours saved: {item.hoursSaved}</p>
    </Col>
  ));

  const renderKeyStats = keyStats.map((item) => (
    <p key={item.name}>{item.name}: {item.value}</p>
  ));

  const renderMainContent = (
    <Container fluid>
      <Row>
        <Col xs="auto">
          <Image src={PlaceholderImage} rounded />
        </Col>
        <Col>
          <h1>{name} ({abbreviation})</h1>
          <p>
            <span>GitHub Link: </span>
            <a href={gitHubLink} rel="noopener noreferrer" target="_blank">{gitHubLink}</a>
          </p>
          <p>
            <span>Support Agreement: </span>
            <a href={supportAgreement} rel="noopener noreferrer" target="_blank">{supportAgreement || 'N/A'}</a>
          </p>
          <p>
            <span>Sample Implementation Link: </span>
            <a href={sampleImplementationLink} rel="noopener noreferrer" target="_blank">{sampleImplementationLink || 'N/A'}</a>
          </p>
          {renderTags}
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col xs={12}>
          <h1>Description</h1>
        </Col>
        <Col xs={12}>
          <p>{shortDescription}</p>
          <p>{longDescription}</p>
        </Col>
      </Row>
      <Row className="mt-3 mb-3">
        <Col xs={12}>
          <h1>Testimonials</h1>
        </Col>
        {renderTestimonials}
      </Row>
    </Container>
  );

  const renderSideContent = (
    <Fragment>
      <h4 className="mb-4">Key stats:</h4>
      {renderKeyStats}
    </Fragment>
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

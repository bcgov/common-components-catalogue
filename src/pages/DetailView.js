import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';

import ComponentsJson from '@/service/data/components.json';
import TagsJson from '@/service/data/tags.json';
import Page from '@/layouts/Page';
import PaneContainer from '@/layouts/PaneContainer';
import PlaceholderImage from '@/assets/placeholder.svg';

const DetailView = () => {
  const { id } = useParams();

  const matchingCoCo = ComponentsJson.find((item) => item.id === parseInt(id));
  const name = matchingCoCo.name || 'N/A';
  const abbreviation = matchingCoCo.abbreviation || 'N/A';
  const gitHubLink = matchingCoCo.gitHubLink || null;
  const supportAgreement = matchingCoCo.supportAgreement || null;
  const sampleImplementationLink = matchingCoCo.sampleImplementationLink || null;
  const shortDescription = matchingCoCo.shortDescription || 'N/A';
  const longDescription = matchingCoCo.longDescription || 'N/A';
  const tags = TagsJson.filter((item) => matchingCoCo.tags.includes(item.id)) || [];
  const keyStats = matchingCoCo.keyStats || [];
  const testimonials = matchingCoCo.testimonials || [];

  const renderMainContent = (
    <Container fluid>
      <Row>
        <Col xs="auto">
          <Image src={PlaceholderImage} rounded />
        </Col>
        <Col>
          <h1>{name} ({abbreviation})</h1>
          <p>GitHub Link: <a href={gitHubLink} rel="noopener noreferrer" target="_blank">{gitHubLink}</a></p>
          <p>Support Agreement: <a href={supportAgreement} rel="noopener noreferrer" target="_blank">{supportAgreement || 'N/A'}</a></p>
          <p>Sample Implementation Link: <a href={sampleImplementationLink} rel="noopener noreferrer" target="_blank">{sampleImplementationLink || 'N/A'}</a></p>
          {tags.map((item) => (
            <Badge key={item.id} className="ml-1 mr-1" variant="dark">
              {item.value} - {item.description}
            </Badge>
          ))}
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
        {testimonials.map((item, index) => (
          <Col key={index} xs>
            <p>&quot;{item.quotation}&quot;</p>
            <p>Hours saved: {item.hoursSaved}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );

  const renderSideContent = (
    <div>
      <h4 className="mb-4">Key stats:</h4>
      {keyStats.map((item) => (
        <p key={item.name}>{item.name}: {item.value}</p>
      ))}
    </div>
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

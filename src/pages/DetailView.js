import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import componentsJson from '@/service/data/components.json';
import placeholderImage from '@/assets/images/placeholder.svg';
import getTag from '@/service/get-tag';

import Page from '@/layouts/Page';
import PaneContainer from '@/layouts/PaneContainer';


const DetailView = () => {
  const { id } = useParams();

  const matchingCoCo = componentsJson.find((item) => item.id === parseInt(id));
  const name = matchingCoCo.name || 'N/A';

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
    <Col key={index} lg={4} >
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
        <Col md="auto">
          <Image src={placeholderImage} rounded fluid />
        </Col>
        <Col>
          <h1 className="h2">{name}</h1>
          <p>
            <strong>GitHub Link: </strong>
            <a href={gitHubLink} rel="noopener noreferrer" target="_blank">{gitHubLink}</a>
          </p>
          <div>
            <strong>Support Agreement: </strong>
            {<ReactMarkdown source={supportAgreement} />}
          </div>
          <div>
            <strong>Sample Implementation Link: </strong>
            <a href={sampleImplementationLink} rel="noopener noreferrer" target="_blank">{sampleImplementationLink || 'N/A'}</a>
          </div>
          <div className="my-1">
          {renderTags}
          </div>
        </Col>
      </Row>
      <hr />
      <Row className="my-3">
        <Col xs={12}>
          <h2>Description</h2>
        </Col>
        <Col xs={12}>
          {<ReactMarkdown source={longDescription} />}
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

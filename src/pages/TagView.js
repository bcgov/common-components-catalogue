import React from 'react';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';

import componentsJson from '@/service/data/components.json';
import getTag from '@/service/get-tag';

import Page from '@/layouts/Page';
import ListItem from '@/components/ListItem';

// TagView Page
const TagView = () => {
  
  const { id } = useParams();

  // Storing list objects
  const ListItems = (id) => componentsJson.map((component) => {

    if ( component.tags.includes(parseInt(id)) ) {
      return (<ListItem component={component} key={component.id} />)
    }
  });

  return (<Page>
    <h1 className="h2 mb-5">List of Common Components under <Badge variant="secondary">{getTag(parseInt(id)).value}</Badge></h1>
    <div>
      {ListItems(id)}
    </div>
  </Page>
)};

export default TagView;

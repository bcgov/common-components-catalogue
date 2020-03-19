import React from 'react';

import componentsJson from '@/service/data/components.json';

import Page from '@/layouts/Page';
import ListItem from '@/components/ListItem';

// Storing list objects
const ListItems = componentsJson.map((component) => (
  <ListItem component={component} key={component.id} />
));

// ListView Page
const ListView = () => (
  <Page>
    <h1 className="mb-5">List of Common Components</h1>
    <div>
      {ListItems}
    </div>
  </Page>
);

export default ListView;

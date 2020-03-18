import React from 'react';

import Page from '@/layouts/Page';
import ListItem from '@/components/ListItem';
import Components from '@/service/data/components.json';

// Storing list objects
const ListItems = Components.map( ( component ) => (
    <ListItem component={component} key={component.id}  />
  )
)

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

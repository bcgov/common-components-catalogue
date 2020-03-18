import React from 'react';

import Page from '@/layouts/Page';
import ListItem from '@/components/ListItem';

const ListView = () => (
  <Page>
    <h1 className="mb-5">List of Common Components</h1>
    <div>
      <ListItem />
      <ListItem />
    </div>
  </Page>
);

export default ListView;

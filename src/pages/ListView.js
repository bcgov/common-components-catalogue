import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const ListView = () => (
  <div>
    <h1>List View Page</h1>
    <Link to={Routes.DetailView}>Go to Detail view page</Link>
  </div>
);

export default ListView;

import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const ListView = () => (
  <div>
    <h1>Detail view</h1>
    <Link to={Routes.DetailView}>Go to Detail view</Link>
  </div>
);

export default ListView;

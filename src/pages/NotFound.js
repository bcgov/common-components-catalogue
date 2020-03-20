import React from 'react';
import { Link } from 'react-router-dom';

import Page from '@/layouts/Page';

const NotFound = () => (
  <Page>
    <h1>Not found.</h1>
    <p>The page you're looking for doesn't exist. <Link to="/">Go to Home</Link></p>
    
  </Page>
);

export default NotFound;

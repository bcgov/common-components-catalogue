import React from 'react';
import { Link } from 'react-router-dom';

import Page from '@/layouts/Page';

const NotFound = () => (
  <Page>
    <h1 className="h2" >Not found.</h1>
    <p>The page you&apos;re looking for doesn&apos;t exist. <Link to="/">Go to Home</Link></p>
  </Page>
);

export default NotFound;

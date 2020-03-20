import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '@/components/Header';

const Page = ({ children }) => (
  <React.Fragment>
    <Header/>
    <Container>
      <div className="text-left my-4">
        {children}
      </div>
    </Container>
  </React.Fragment>
);

export default Page;

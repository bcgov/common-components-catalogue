import React from 'react';
import Container from 'react-bootstrap/Container';

import Header from '@/components/Header';

const Page = ({ children }) => (
  <React.Fragment>
    <Header/>
    <Container>
      <div className="page__content text-left my-2">
        {children}
      </div>
    </Container>
  </React.Fragment>
);

export default Page;

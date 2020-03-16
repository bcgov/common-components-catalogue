import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '@/constants';

const Intro = () => (
  <div className="intro">
    <h1 className="intro__title">Intro Page</h1>
    <Link to={Routes.ListView}>Go to List view</Link>
  </div>
);

export default Intro;

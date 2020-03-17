import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '@/constants';

const DetailView = () => (
  <div>
    <h1>Detail View Page</h1>
    <Link to={Routes.Intro}>Go to Intro page</Link>
  </div>
);

export default DetailView;

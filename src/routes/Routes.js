import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Routes } from '@/constants';
import Intro from '@/pages/Intro';
import ListView from '@/pages/ListView';
import DetailView from '@/pages/DetailView';
import NotFound from '@/pages/NotFound';

export default () => (
  <Switch>
    <Route exact path={Routes.Intro} component={Intro} />
    <Route exact path={Routes.ListView} component={ListView} />
    <Route exact path={Routes.DetailView} component={DetailView} />
    <Route component={NotFound} />
  </Switch>
);

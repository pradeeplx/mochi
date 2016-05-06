import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import { App, Dashboard, Profile, Contacts, ComposePage } from './pages';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dash" component={Dashboard} />
    <Route path="contacts" component={Contacts} />
    <Route path="donor/(:username)" component={Profile} />
    <Route path="donor/(:username)/compose" component={ComposePage} />
  </Route>
);

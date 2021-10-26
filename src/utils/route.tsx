import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

let ROUTES: Array<JSX.Element> = [];

export const buildPath = (index: number): string =>
  `/unit-testing-with-angular/${index === 0 ? '' : index}`;

const buildRoutes = (components: Array<any>) => {
  if (ROUTES.length) return ROUTES;

  ROUTES = components.map((component, index) => {
    const path = buildPath(index);

    // @ts-ignore
    return <Route key={path} path={path} component={() => component} exact />;
  });

  return ROUTES;
};

export const configureRouter = (history: any, components: Array<any>) => (
  <Router history={history}>
    <Switch>{buildRoutes(components)}</Switch>
  </Router>
);

import React, { FC } from 'react';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTE_TO_FILMS, ROUTE_TO_HOME } from 'common/constants/routes';
import { routes } from 'common/routes';

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        {routes.map(route => {
          return (
            <Route key={route.route} path={route.route} element={<route.Component />} />
          );
        })}
        <Route path={ROUTE_TO_HOME} element={<Navigate to={ROUTE_TO_FILMS} />} />
      </Routes>
    </div>
  );
};

export default App;

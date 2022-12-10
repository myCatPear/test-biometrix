import React, { FC, useEffect } from 'react';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppLoadingBar } from '../components';

import { setIsInitializedApp } from './appSlice';

import { ROUTE_TO_FILMS, ROUTE_TO_HOME } from 'common/constants/routes';
import { useAppDispatch, useAppSelector } from 'common/hooks/app';
import { routes } from 'common/routes';
import { getIsInitializedApp } from 'common/selectors';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isInitializedApp = useAppSelector(getIsInitializedApp);

  useEffect(() => {
    dispatch(setIsInitializedApp({ value: true }));
  });

  if (!isInitializedApp) {
    return <AppLoadingBar />;
  }

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

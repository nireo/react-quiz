import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Question from './components/Question';
import Multiple from './components/Multiple';
import Main from './components/Main';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/multiple-choice" render={() => <Multiple />} />
        <Route exact path="/true-or-false" render={() => <Question />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

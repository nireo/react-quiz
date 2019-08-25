import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Question from './components/Question';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/true-or-false" render={() => <Question />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

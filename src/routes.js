import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCategory from './pages/AddCategory';
import AddVideo from './pages/AddVideo';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/cadastro/categoria' component={AddCategory} />
        <Route path='/cadastro/video' component={AddVideo} />
        <Route component={() => <h2>404</h2>} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

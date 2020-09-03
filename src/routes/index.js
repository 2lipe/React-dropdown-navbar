import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Marketing from '../pages/Marketing';
import Contact from '../pages/Contact';
import Consulting from '../pages/Consulting';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/sign-up' exact component={Signup} />
      <Route path='/products' exact component={Products} />
      <Route path='/services' exact component={Services} />
      <Route path='/marketing' exact component={Marketing} />
      <Route path='/contact-us' exact component={Contact} />
      <Route path='/consulting' exact component={Consulting} />
    </Switch>
  );
};

export default Routes;

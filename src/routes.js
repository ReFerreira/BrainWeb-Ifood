import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Base from './pages/Base';
import Flavour from './pages/Flavour';
import Size from './pages/Size';
import Resume from './pages/Resume';
import Checkout from './pages/Checkout';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/base" component={Base} />
        <Route path="/sabor" component={Flavour} />
        <Route path="/tamanho" component={Size} />
        <Route path="/finalizar" component={Resume} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

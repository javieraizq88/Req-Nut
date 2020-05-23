import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Pediatria from './components/pediatria';
import Adulto from './components/adulto';
import AdultoMayor from './components/adultoMayor';
import AdultoERC from './components/adultoERC';

const App = props => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adulto/erc" component={AdultoERC} />
          <Route exact path="/adulto" component={Adulto} />
          <Route exact path="/pediatria" component={Pediatria} />
          <Route exact path="/adultoMayor" component={AdultoMayor} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default injectContext(App);

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import store, { history } from './store';

import Home from './screens/Home';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './lib/init';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

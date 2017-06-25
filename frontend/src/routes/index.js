import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'components/Errors/404';
import Modal from 'components/Modal'
import Alerts from 'components/Alerts'
import Container from './Container';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Container} />
          <Route component={NotFound} />
        </Switch>
        <Modal />
        <Alerts />
      </div>
    );
  }
}

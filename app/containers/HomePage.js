// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import SignIn from '../components/SignIn';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    // return <Home />;
    return <SignIn />;
  }
}
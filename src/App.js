import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import RouterPath from './RouterPath/RouterPath';


export default class App extends Component {

  render() {
    return (

      <RouterPath />

    );
  }
}

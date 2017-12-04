'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';
import SearchForm from './components/searchForm';
import SearchResults from './components/searchResultsList';
import './style/main.scss';

class Header extends React.Component {

  render() {
    return (
      <header><h1>Reddit Search Engine</h1></header>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      topics: []
    }
  }

  render() {
    return (

    )
  }

}

ReactDom.render(<App/>, document.getElementById('root');)
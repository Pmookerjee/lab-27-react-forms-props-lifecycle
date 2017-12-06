'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import SearchForm from './components/searchForm';
import SearchResults from './components/searchResultsList';
import './style/main.scss';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.getTopics = this.getTopics.bind(this);

    this.state = {
      topics: [],
    }
  }

  componentDidMount() {
    console.log("__STATE__", this.state);
  }


  componentWillMount() {
    
    this.setState({topics: []});
  }

  componentWillUnmount() {
    this.setState({topics: []});
  }

  getTopics(boards, limit) {
     
     let topics = (boards.body.data.children).slice(0, limit);
     this.setState({topics});

  }

  render() {
    return (
      <div id="appWrapper">
        <Header/>
        <SearchForm getTopics={this.getTopics}/>
        <SearchResults topics={this.state.topics}/>
      </div>
    )
  }

}


ReactDom.render(<App/>, document.getElementById('root'));
'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import '../../style/main.scss';
import superagent from 'superagent';

class searchForm extends React.Component {

  constructor(props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this);
    this.handleNewSearch = this.handleNewSearch.bind(this);
    this.handleNewLimit = this.handleNewLimit.bind(this);

    this.state = {
      search: '',
      limit: 0,
      inputClass: ''
    }
  }

  componentDidMount() {
    console.log("__STATE__", this.state);
  }


  componentWillMount() {
    
    this.setState({
      search: '',
      limit: 0,
      inputClass: ''
    })
  }

  componentWillUnmount() {
    this.setState({
      search: '',
      limit: 0,
      inputClass: ''
    })  
  }

  formSubmit(e) {

    e.preventDefault();
    this.setState({inputClass: ''});

    if(this.state.limit < 1 || this.state.limit > 100){
      this.setState({inputClass: 'error'});
      return;
    }

    superagent.get(`https://www.reddit.com/r/${this.state.search}.json?limit=${this.state.limit}`)
      .then(result => {
        this.props.getTopics(result, this.state.limit);
      })
      .catch(err => { console.log('Error is ', err); this.setState({inputClass: 'error'})});
  }

  handleNewSearch(e) {

    e.preventDefault();
    this.setState({search: e.target.value});    

  }

  handleNewLimit(e) {
    
    e.preventDefault();    
    this.setState({limit: e.target.value});     

  }


  render() {

    return (
        <form id='search' onSubmit={this.formSubmit}>
          <p>Reddit Board</p>
            <input type="text" value={this.state.search} className={this.state.inputClass} onChange={this.handleNewSearch}/>
          
          <p>Limit (between 1-100)</p>
            <input type="text" min="1" max="100" value={this.state.limit} className={this.state.inputClass} onChange={this.handleNewLimit} />
            <input type="submit" value="submit" id="submit" className={this.state.inputClass} onSubmit={this.formSubmit}/>
        </form>
    )
  }

}

searchForm.propTypes = {
  getTopics: PropTypes.func.isRequired,
};

export default searchForm;
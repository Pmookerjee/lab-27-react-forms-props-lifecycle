'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class searchResultList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      class: 'hidden'
    }
  }

   render() {
    
    const {topics} = this.props;    

    return (
      <ul id='list'>
          {
            topics.map(result => {
            return (
              <li key={result.data.id}>
                <a target='_blank' href={result.data.url}>{result.data.title}</a>
              </li>
            )
          })
        }
      </ul>   
    )
  }


} 

searchResultList.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default searchResultList;
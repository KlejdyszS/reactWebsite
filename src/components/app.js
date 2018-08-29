import _ from 'lodash';
import React, { Component } from 'react';
import Items from '../components/Items';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

  render() {
    return (
      <div>
        <Items />
      </div>
    );
  }
}




function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(App)

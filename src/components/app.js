import _ from 'lodash';
import React, { Component } from 'react';
import Items from '../components/Items';
import Addproduct from '../components/add_product.js'
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">

        <ul class="list-group">
            <li class="list-group-item">
              <Link to="/">Home</Link>
            </li>
            <li class="list-group-item">
              <Link to="/addproduct">Add Product</Link>
            </li>
          </ul>

          <Route exact path="/" component={Items} />
          <Route path="/addproduct" component={Addproduct} />
        </div>
      </Router>
    );
  }
}




function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(App)

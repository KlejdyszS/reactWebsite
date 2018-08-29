import React, { Component } from 'react';
import { addData } from '../actions/index.js';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Addproduct extends Component {

  constructor () {
    super();
    this.state = {
      product: '',
    };

  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addData(this.state.product)
  }

  handleInputChange(event) {
    this.setState({ product: event.target.value });
  }



render () {
  return (
    <form onSubmit={this.handleFormSubmit.bind(this)} className="form-inline">
      <div className="form-group">
        <input
          className="form-control"
          placeholder="Add a product"
          value={this.state.product}
          onChange={this.handleInputChange.bind(this)} />
        <button action="submit" className="btn btn-primary">Create Post</button>
      </div>
    </form>
  );
}
}


function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(Addproduct)

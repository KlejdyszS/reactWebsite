import React, { Component } from 'react';
import { addData } from '../actions/index.js';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Addproduct extends Component {

  constructor () {
    super();
    this.state = {
      productName: '',
      productPrice: '',
      productImage: 'https://asgard.pl/png/product/17012-02.jpg',
      productAvailable: 'Dostępny',
      productDesciption: ''
    };

  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addData(this.state)
    console.log(this.state)
  }

  handleInputChange(event) {
     this.setState({ [event.target.name]: event.target.value } );
  }



render () {
  return (
  <div className="col-xs-12 col-sm-12 col-lg-12">
    <form onSubmit={this.handleFormSubmit.bind(this)} >
      <div className="form-group">

      <label htmlFor="productName">Name: </label>
        <input
          id="productName"
          name="productName"
          className="form-control"
          placeholder="Product Name"
          value={this.state.productName}
          onChange={this.handleInputChange.bind(this)} />


        <label htmlFor="Description"> Description: </label>
          <textarea
            id="Description"
            name="productDesciption"
            className="form-control"
            placeholder="Product Desciption"
            value={this.state.productDesciption}
            onChange={this.handleInputChange.bind(this)} />

        <label htmlFor="price"> Price: </label>
        <input
          id="price"
          name="productPrice"
          className="form-control"
          placeholder="Product Price"
          value={this.state.productPrice}
          onChange={this.handleInputChange.bind(this)} />

        <label htmlFor="Image"> Image: </label>
        <input
          id="Image"
          name="productImage"
          className="form-control"
          placeholder="Product image"
          value={this.state.productImage}
          onChange={this.handleInputChange.bind(this)} />

        <label htmlFor="available"> Is available?: </label>
        <input
          id="available"
          name="productAvailable"
          className="form-control"
          placeholder="Is product available?"
          value={this.state.productAvailable}
          onChange={this.handleInputChange.bind(this)} />

          
        <button action="submit" className="btn btn-primary">Create Post</button>

      </div>
    </form>
    </div>
  );
}
}


function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(Addproduct)

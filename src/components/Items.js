import _ from 'lodash';
import React, { Component } from 'react';
import Item from '../components/item';
import { connect } from 'react-redux';
import * as actions from '../actions';

import { addData } from '../actions/index.js';

const SRC = "https://asgard.pl/png/product/17069.jpg"
const SRC2 = "https://asgard.pl/png/product/17069.jpg"

class Items extends Component {

  state = { product: '' };

  componentWillMount(){
      this.props.fetchData();
  }

  renderProducts() {
      console.log (this.props.products)
    return _.map(this.props.products, ({ item_image, productDesciption, productName, productPrice, productAvailable }) => {
      return <Item image={item_image} productDesciption={productDesciption} productName={productName} productPrice={productPrice} productAvailable={productAvailable} />
    });
  }


  render() {
    return (
      <div>
          <div class="album py-5 bg-light">
          <button onClick={addData}>
         Add test product
          </button>
            <div class="container">
                <div class="row">
                  {this.renderProducts()}
                </div>

            </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(Items)

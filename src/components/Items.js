import React, { Component } from 'react';
import Item from '../components/item';

const SRC = "https://asgard.pl/png/product/17069.jpg"
const SRC2 = "https://asgard.pl/png/product/09075.jpg"

class Items extends Component {
  render() {
    return (
      <div>
          <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                  <Item image={SRC} productDesciption="text1" productName="Breloczek Otwieracz" productPrice="1.00" productAvailable="Dostępny" />
                  <Item image={SRC2}  productDesciption="text2" />
                </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Items;

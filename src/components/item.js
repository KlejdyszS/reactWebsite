import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
         <div>
            <div class="col-md-4"  key={this.props.key} >
                <div class="card mb-4 shadow-sm">
                  <div class="card-img-container">
                    <img src={this.props.image} alt="boohoo" className="card-img-top"/>
                  </div>
                  <div class="card-body">
                      <p class="product-name">
                        {this.props.productName}
                      </p>
                      <p class="product-productAvailable">
                        {this.props.productAvailable}
                      </p>


                    <div class="product-price-ammount">
                      <p class="product-productPrice">
                        {this.props.productPrice} <span class="product-productPriceInfo" > zł netto / 1 szt </span>
                      </p>
                    </div>

                </div>
                <div class="card-button" >
                    <button type="button" class="product-button1">INFORMACJE</button>
                </div>

                <div class="card-button" >
                    <button type="button" class="product-button2">ZAMÓW</button>
                </div>
              </div>
             </div>
         </div>
    );
  }
}

export default Item;

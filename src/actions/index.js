import Firebase from 'firebase'
import _ from 'lodash';

import {
  FETCH_DATA,
} from './types';

import { FirebaseConfig } from "../config/keys";
Firebase.initializeApp(FirebaseConfig);

const products = Firebase.database().ref('products');

export function fetchData() {
  return dispatch => {
    products.on('value', snapshot => {
      dispatch({
        type: FETCH_DATA,
        payload: snapshot.val()
      });
    });
  }
}


export function addData(data) {
  return dispatch => {
    Firebase.database().ref('products/' ).push({
      item_image: data.productImage,
      productDesciption: 'text2',
      productName : data.productName,
      productPrice : data.productPrice,
      productAvailable : data.productAvailable
    });
  };
}

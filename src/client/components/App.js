import React, { Component } from 'react';
import Restaurant from './Restaurant';
import RestaurantSelectButtons from './RestaurantSelectButtons';


export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state: {

  //   }
  // };

  render() {
    return (
      <div>
        <Restaurant name='Nana'/>
        <RestaurantSelectButtons />
      </div>
    );
  }
};

/*

*/
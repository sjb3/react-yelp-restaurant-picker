import React, { Component } from 'react';
import Restaurant from './Restaurant';
import RestaurantSelectButtons from './RestaurantSelectButtons';
// import axios from 'axios';
import { makeQuery } from '../../common/utils';


// What do i need to store?
// We need a way to search for restaurants
// -> then app gives me options
// We need to show a single restaurant on the page with YES/NO button
// When user NO -> move current choice to rejectRestaurant
// YES -> currentRestaurant -> acceptRestaurant and move to details

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rejectedRestaurants: [],
      acceptedRestaurants: [],
      currentRestaurants: {},
      restaurantsFromSearch: [],
    };
  }

  componentDidMount() {
    const queryString = makeQuery({ location: 'Seattle', term: 'Yoga' });

    fetch(`http://localhost:3000/yelp/search${queryString}`, { mode: 'no-cors' })
      .then(res => res.json())
      .then(json => console.log('json::', json));
  }

  render() {
    return (
      <div>
        <Restaurant name="option" />
        <RestaurantSelectButtons />
      </div>
    );
  }
}

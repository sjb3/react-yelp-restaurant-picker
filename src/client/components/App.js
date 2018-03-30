import React, { Component } from 'react';
import Restaurant from './Restaurant';
import RestaurantSelectButtons from './RestaurantSelectButtons';
import RestaurantDetails from './Restaurant_Details';

import { makeQuery } from '../../common/utils';
import Loading from './loading';

/*
// What do i need to store?
// We need a way to search for restaurants
// -> then app gives me options
// We need to show a single restaurant on the page with YES/NO button
// When user NO -> move current choice to rejectRestaurant
// YES -> currentRestaurant -> acceptRestaurant and move to details
*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rejectedRestaurants: [],
      acceptedRestaurant: -1,
      restaurantsFromSearch: [],
      currentRestaurantIndex: 0,
    };
    this.onRestaurantReject = this.onRestaurantReject.bind(this);
    this.onRestaurantAccept = this.onRestaurantAccept.bind(this);
  }

  componentDidMount() {
    const queryString = makeQuery({ location: 'Seattle', term: 'Restaurant' });

    fetch(`http://localhost:3000/yelp/search${queryString}`)
      .then(res => res.json())
      .then((json) => {
        this.setState({ restaurantsFromSearch: json });
      });
  }
  onRestaurantReject() {
    this.setState({ currentRestaurantIndex: this.state.currentRestaurantIndex + 1 });
    // console.log('REJECTED restaurants');
  }
  onRestaurantAccept() {
    // console.log('calling from TESTAIRANT ACCEPT');
    this.setState({ acceptedRestaurantIndex: this.state.currentRestaurantIndex });
  }

  render() {
    const { restaurantsFromSearch, currentRestaurantIndex, acceptedRestaurantIndex } = this.state;

    if (acceptedRestaurantIndex >= 0) {
      return (
        <RestaurantDetails restaurant={restaurantsFromSearch[acceptedRestaurantIndex]} />
      );
    }

    if (restaurantsFromSearch.length > 0) {
      const restaurant = restaurantsFromSearch[currentRestaurantIndex];
      // console.log('//////////////////', (restaurant));

      return (
        <div>
          <Restaurant restaurant={restaurant} />
          <RestaurantSelectButtons
            onRestaurantReject={this.onRestaurantReject}
            onRestaurantAccept={this.onRestaurantAccept}
          />
        </div>
      );
    }
    return (<Loading />);
  }
}

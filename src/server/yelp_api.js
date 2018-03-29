import axios from 'axios';
// TODO: move the key to env or config file later

const { makeQuery } = require('../common/utils');

const API_KEY = 'K1yA1HCefBu6GOrarquTAombN4yzc4LiEt5ltUVDnVXVZNk33yFGmPPFC7-7v-RgXl-DtIi-dbOG-yWT1eR1LQsex--KaPwy5AWgFnWWUkR7IaTnkg0SA_6RGXqxWnYx';

// creating abstraction/interface to get data from the YELP
// hence, the front-end only cares about the restaurant display, not how to get the data
// Q: how we gonna use the YelpApi then?
// search({searchString, some parameters, term, location/coordinates})
//    => get promise/.then ... => .then(console.log(restaurants))


// console.log(makeQuery({ term: 'Restaurants', location: 'San Francisco' }));

function search(options) {
  const queryString = makeQuery(options);

  return axios.get(
    `https://api.yelp.com/v3/businesses/search${queryString}`,
    { headers: { Authorization: `Bearer ${API_KEY}` } },
  )
    .then(result => ({ success: true, data: result.data.businesses }));
  // .catch(error => ({ error: true, message: 'Yelp api crashed' }), console.log(err));
}

// search({ term: 'Yoga' || 'yoga' || 'YOGA', location: 'Seattle' || 'seattle' || 'SEATTLE' })
//   .then(console.log);

module.exports = {
  search,
};

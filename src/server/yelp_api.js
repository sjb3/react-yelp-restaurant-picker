'use strict';

// TODO: move the key to env or config file later
const API_KEY = 'K1yA1HCefBu6GOrarquTAombN4yzc4LiEt5ltUVDnVXVZNk33yFGmPPFC7-7v-RgXl-DtIi-dbOG-yWT1eR1LQsex--KaPwy5AWgFnWWUkR7IaTnkg0SA_6RGXqxWnYx';
const axios = require('axios');


// creating abstraction/interface to get data from the YELP
// hence, the front-end only cares about the restaurant display, not how to get the data
// Q: how we gonna use the YelpApi then?
// search({searchString, some parameters, term, location/coordinates})
//    => get promise/.then ... => .then(console.log(restaurants))

// makeQuery :: Object => String
function makeQuery(obj) {
  const result = '?';

  for(let key in obj) {
    let str = obj[key] && obj[key].replace(/\s/g, '+');
    if (str) {
      result += `${key}=${str}&`
    }
  }
  return result.slice(0, -1);
};

// console.log(makeQuery({term:'Restaurants', location:'Seattle'}));
function search(options) {
  let queryString = makeQuery(options);

  return axios.get(`https://api.yelp.com/v3/businesses/search${queryString}`,
  {headers: {'Authorization': `Bearer ${API_KEY}`}, })
  .then(result => {
    return { success: true, data: result.data.businesses }
  })
  .catch(err => {
    console.error('????????', err)
    return { err: true, message: 'Yelp api crashed' };
  });
}

// search({term:'Yoga||yoga', location: 'Seattle'||'seattle'})
//   .then(console.log)

module.export = {
  search
};
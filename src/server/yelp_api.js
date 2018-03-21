'use strict';

const CLIENT_ID =  'f8XXrm3Nv39dcftleVv5wQ';
const API_KEY = 'K1yA1HCefBu6GOrarquTAombN4yzc4LiEt5ltUVDnVXVZNk33yFGmPPFC7-7v-RgXl-DtIi-dbOG-yWT1eR1LQsex--KaPwy5AWgFnWWUkR7IaTnkg0SA_6RGXqxWnYx';
const axios = require('axios');

// const yelp = new Yelp({ id:CLIENT_ID , apiKey: API_KEY });

// node-yelp-api expired, use just fetch or axios instead
axios.get('https://api.yelp.com/v3/businesses/search?term=Restaurants&location=Seattle',
  {headers: {'Authorization': `Bearer ${API_KEY}`}})
  .then( result => {
  console.log('SUCCESS', result.data);
  })
  // .catch(err => {
  //   console.error('????????', err)
  // })
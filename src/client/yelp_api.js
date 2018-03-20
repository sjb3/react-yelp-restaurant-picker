'use strict';

import Yelp from 'node-yelp-fusion';

export const CLIENT_ID =  'f8XXrm3Nv39dcftleVv5wQ';
export const API_KEY = 'K1yA1HCefBu6GOrarquTAombN4yzc4LiEt5ltUVDnVXVZNk33yFGmPPFC7-7v-RgXl-DtIi-dbOG-yWT1eR1LQsex--KaPwy5AWgFnWWUkR7IaTnkg0SA_6RGXqxWnYx';

const yelp = new Yelp({ id:CLIENT_ID , apiKey: API_KEY });

// node-yelp-api expired, use just fetch or axios instead
// fetch('https://api.yelp.com/v3/businesses/search',
//   {header: {'Authorization': `Bearer ${API_KEY}`})
//   .then( result =>
//   console.log('>>>>>>>>>>', result));

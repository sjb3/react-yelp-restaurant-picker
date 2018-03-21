const express = require('express');
const app = express();
const YelpApi = require('./yelp_api');


app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});
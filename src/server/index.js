import express from 'express';

const app = express();
const YelpApi = require('./yelp_api.js');


app.use(express.static('public'));

// routes to access Yelp's api endpoint
// maybe separate file?

app.get('/yelp/search', (req, res) => {
  const params = req.query;
  // console.log('>>>>>>>>>>> query::', req.query)
  YelpApi.search(params)
    .then((results) => {
      res.set('Access-Control-Allow-Origin', '*');
      res.json(results.data);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`>>>>> Server running on: http://localhost:${PORT}`);
});

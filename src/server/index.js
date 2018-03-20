const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.statis('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
});
// require('dotenv').config()
// const express = require('express');
// const morgan = require('morgan');
// const axios = require('axios');

// const app = express();
// app.use(morgan('dev'));
// app.use(express.static('dist'));

// app.use(express.static('public'));
// var cache = {
//   url: null,
//   data: null
// }

// app.get('/movie/:id', (req, res) => {
//   res.send("Yeet")
// })

// app.get('/api/:id', function (req, res) {
//   if (cache.url === req.url) res.send(cache.data);
//   else {
//     axios.get('http://www.omdbapi.com/?s=' + req.params.search + `&apikey=${process.env.MY_KEY}`)
//       .then(function (response) {
//         cache.url = req.url
//         cache.data = response.data;
//         res.status(200).json(response.data);
//       })
//       .catch(function (error) {
//         res.status(200).json(error.message);
//       });
//   }
// });
// module.exports = app;

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

module.exports = app;
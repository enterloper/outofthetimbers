const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 4040);
const PORT = (app.get('port'));

/* ROUTING */
/* MIDDLEWARE */
app.use(morgan('dev'));
// console.log(process.env.NODE_ENV);
// if (process.env.NODE_ENV === 'production') {
//   // Express will serve up production assets
//   // like our main.js file and main.css file
//   // app.use(express.static('client/build'));
//
//   // Express will serve up the index.html file
//   // if the route is not recognized
  const path = require('path');
  // app.get('*', (req, res) => {
  //
  // });
  app.use('/', (req, res) => {
    console.log(path.resolve(__dirname, 'client', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
// }

app.listen(PORT, function() {
  console.warn(`Out of the Timbers server fired up on port: ${PORT}`);
});

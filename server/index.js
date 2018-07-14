const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 4040);

/* ROUTING */

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file and main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if the route is not recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = (app.get('port'));
app.listen(PORT, function() {
  console.warn(`Out of the Timbers server fired up on port: ${PORT}`);
});

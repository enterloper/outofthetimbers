const express = require('express');

const app = express();

app.set('port', process.env.PORT || 4040);
const PORT = (app.get('port'));

app.get('/', function(rec, res) {
  res.type('text/plain');
  res.send('she\'s up!');
})

app.listen(PORT, function() {
  console.log(`Out of the Timbers server fired up on ${PORT}`);
});

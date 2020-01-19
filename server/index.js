const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
app.set('port', process.env.PORT || 4040);
const PORT = (app.get('port'));

/* ROUTING */
/* MIDDLEWARE */
app.use(morgan('dev'));

const path = require('path');
app.get('/*', (req, res) => {
  res.sendFile(JSON.stringify(path.join(__dirname, './client/dist/index.html'), (error) => {
    if(error) {
      res.status(500).send(error);
    }
  }));
});

app.listen(PORT, () => console.warn(`Out of the Timbers server fired up on port: ${PORT}`));

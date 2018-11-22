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
app.use('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => console.warn(`Out of the Timbers server fired up on port: ${PORT}`));

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const dataRouter = require('./server/router');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', dataRouter);

app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
});

module.exports = app;

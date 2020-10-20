const express = require('express');
const bodyparser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(bodyparser.urlencoded({
    parameterLimit: 100000,
    limit: '500mb',
    extended: true
  }));

app.use(bodyparser.json())

app.use(cors());

app.use(require('./routes'));

const port = 3030;
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
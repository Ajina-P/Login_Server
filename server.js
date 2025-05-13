const express = require('express');
const bodyParser = require('body-parser');//npm install body-parser

//body-parser is used to parse the JSON data from client rquests
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

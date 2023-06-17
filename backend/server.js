const express = require('express');
const app = express();
const server = require('http').Server(app);
// const next = require("next");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';

const connectDb = require('./utilsServer/connectDb');
app.use(cors()); // Add this line before defining your routes

const signup = require('./api/signup');
const auth = require('./api/auth');
const item = require('./api/item');
const profile = require('./api/profile');
const buy = require('./api/buy');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 3001;
connectDb();

app.use(bodyParser.json());

app.use(cors());

app.options('*', cors());

app.use('/api/signup', signup);
app.use('/api/auth', auth);
app.use('/api/item', item);
app.use('/api/profile', profile);
app.use('/api/buy', buy);

app.listen(PORT, (err) => {
  if (err) throw err;
  console.warn(`Express server running on ${PORT}`);
});

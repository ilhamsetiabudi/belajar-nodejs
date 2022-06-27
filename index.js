// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const { messages } = require('./src/helpers/utils/response/response')
const mongoConnection = require('./src/helpers/databases/mongodb/connection');
const { getAllUser, getOneUser } = require('./src/modules/users/queries/controllers');
const { insertOne } = require('./src/modules/users/commands/controllers')
require('dotenv').config()
const PORT = process.env.PORT ;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    return res.status(200).json(messages(200, null, 'Wellcome To Belajar Nodejs'))
})

app.get('/users', getAllUser);
app.get('/users/:id', getOneUser);
app.post('/users', insertOne);

mongoConnection.connectToServer((err) => {
  if (err) {
    console.error(err);
    process.exit();
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
const { MongoClient } = require('mongodb');
const connectionString = process.env.MONGODB_URL || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'belajar';
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let dbConnection;

const connectToServer = (callback) => {
  client.connect((err, db) => {
    if (err || !db) {
      return callback(err);
    }

    dbConnection = db.db(dbName);
    console.log('Successfully connected to MongoDB.');
    return callback();
  });
};

const getDb = () => {
  return dbConnection;

};

module.exports = {
  connectToServer,
  getDb
};
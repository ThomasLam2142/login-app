const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string

// Database Name
const dbName = 'login'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client.connect(function (err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  // Perform database operations here

  // Close the connection when done
  client.close();
});

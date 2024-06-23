const express = require('express');
const { Pool } = require('pg');

const app = express();

// Create a new Pool instance to connect to PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432, // default PostgreSQL port
});

// Test the database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    app.get('/', (_, res) => {
        res.json({"message" : 'Error connecting to PostgreSQL database'})
    })
  } else {
    app.get('/', (_, res) => {
        res.json({"message" : 'Success connecting to PostgreSQL database'})
    })
  }
});

// Your Express routes and application logic would go here

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

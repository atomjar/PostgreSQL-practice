const { Pool, Client } = require('pg');

const client = new Client();
client.connect();


const pool = new Pool({
  user: 'adamjahr',
  host: 'localhost',
  database: 'racedb',
  password: '',
  port: 3211,
})

client.connect();

module.exports = {
  query: (text, params, callback) => {
    return client.query(text, params, callback)
  }
}

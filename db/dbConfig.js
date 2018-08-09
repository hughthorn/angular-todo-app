const pgp = require('pg-promise')({
  query: q => console.log(q.query),
});

const config = {
  host: 'localhost',
  port: 5432,
  database: 'template',
}

const dbConfig = pgp(config)

module.exports = dbConfig;

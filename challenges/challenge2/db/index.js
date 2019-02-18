const initOptions = {promiseLib: Promise};
const pgp = require('pg-promise')(initOptions);
const dbConfig = require('./config');
const db = pgp(dbConfig);

// USE THIS INSTANCE OF DB IN CHALLENGE 2
module.exports = db;
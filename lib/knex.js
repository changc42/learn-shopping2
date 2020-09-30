module.exports = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5433,
    user: "shopping",
    password: "password",
    database: "shopping",
  },
});

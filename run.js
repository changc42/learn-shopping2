const { Client } = require("pg");
const knex = require("./lib/knex")

const client = new Client({
  user: "postgres",
  password: "12345678",
  database: "mydb",
});
client.connect();

function showTables(){
    client.query(
        "DROP TABLE person;", (err, res) => {
          console.log(err ? err.stack : res.rows, "anon func"); // Hello World!
          client.end();
        }
      );
}

knex.select("*").from("information_schema.tables").where({table_name:"pg_statio_sys_tables"}).then(res=>console.log(res))
showTables()

// client.query("CREATE TABLE person (address char(20));")


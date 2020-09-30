
exports.up = function(knex) {
  return knex.schema.createTable('news', table=>{
      table.increments('id').primary();
      table.text('title');
      table.date('date_published');
      table.text('news_content');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("news")
};

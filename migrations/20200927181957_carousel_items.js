
exports.up = function(knex) {
    return knex.schema.createTable('carousel_items', table=>{
        table.increments('id').primary();
        table.text('image_url');
        table.text('destination_link')
        table.text('message');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("carousel_items")
  };
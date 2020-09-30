
exports.up = function(knex) {
    return knex.schema.createTable('item_tags', table=>{
        table.increments('id').primary();
        table.text('item_id').references('items.id');
        table.text('item_tag');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("item_tags")
  };
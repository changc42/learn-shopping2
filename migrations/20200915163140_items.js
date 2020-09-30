exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.text("name");
    table.text("image_url");
    table.float("price");
    table.text("promoted_image_url");
    table.integer("quantity");
    table.text("category");
    table.float("sale_price");
    table.boolean("is_promoted");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("items");
};

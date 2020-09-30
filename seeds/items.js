exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {
          name: "Stay Positive",
          price: 3.50,
          image_url:
            "https://cdn.shopify.com/s/files/1/0262/3229/1350/products/positive_981a1a47-92bd-4681-b495-7d23e3e7d401_600x.png?v=1589850267",
            promoted_image_url:null,
            quantity: 100,
            category: "Card",
            sale_price: null,
            is_promoted: null
          
        }
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredientName: 'elbow pasta', quantity: 3, recipe_id: 2},
        {id: 2, ingredientName: 'string pasta', quantity: 2, recipe_id: 1},
        {id: 3, ingredientName: 'chicken', quantity: 1, recipe_id: 3}
      ]);
    });
};

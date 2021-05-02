
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'spaghetti'},
        {id: 2, name: 'mac-n-cheese'},
        {id: 3, name: 'fried chicken'}
      ]);
    });
};


exports.up = function(knex) {
  return knex.schema.createTable('recipes', (table) => {
      table.increments('id')
      table.string('name', 255).notNullable().unique()
  })
  .createTable('ingredients', (table) => {
      table.increments()
      table.string('ingredientName', 255).notNullable()
      table.integer('quantity').notNullable()
      table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
  })
  .createTable('instructions', (table) => {
      table.increments()
      table.integer('step_number')
      .unsigned()
      .notNullable()
      table.text('step_instructions').notNullable()
      table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};

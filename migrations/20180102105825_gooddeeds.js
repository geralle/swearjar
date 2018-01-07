
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('gooddeeds', (table)=>{
      table.increments();
      table.date('date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.text('description')
      table.integer('count')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('gooddeeds')
};

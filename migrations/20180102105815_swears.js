
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('swears', (table)=>{
      table.increments()
      table.string('date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.integer('count')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('swears')
};

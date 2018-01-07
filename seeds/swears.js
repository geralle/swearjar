
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('swears').del()
    .then(function () {
      // Inserts seed entries
      return knex('swears').insert([
        {
          date: '2018-01-02',
          count: 3
        }
      ]);
    });
};

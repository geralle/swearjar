
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gooddeeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('gooddeeds').insert([
        {
          date: '2018-01-02',
          description: "picked up a piece of trash",
          count: 3
        }
      ]);
    });
};

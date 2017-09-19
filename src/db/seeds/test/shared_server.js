// Seed file

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('app_servers').del()
    .then(function () {
      // Inserts seed entries
      return knex('app_servers').insert({
        createdBy: 4, 
        createdTime: '2017-09-18 15:30:23',
        name: 'Fiuber',
        lastConnection: '2017-09-18 15:30:23'
      });
    }).then(function() {
        return knex('app_servers').insert({
          createdBy: 2, 
          createdTime: '2017-09-15 10:40:14',
          name: 'AppJ',
          lastConnection: '2017-09-15 10:40:14'
      });
    });
};

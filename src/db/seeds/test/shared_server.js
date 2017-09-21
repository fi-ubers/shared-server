// Seed file

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('app_servers').del()
    .then(function () {
      // Inserts seed entries
      return knex('app_servers').insert({
        createdBy: 4, 
        createdTime: '2017-09-18T18:30:23.000Z',
        name: 'Fiuber',
        lastConnection: '2017-09-18T18:30:23.000Z'
      });
    }).then(function() {
        return knex('app_servers').insert({
          createdBy: 2, 
          createdTime: '2017-09-15T10:40:14.000Z',
          name: 'AppJ',
          lastConnection: '2017-09-15T10:40:14.000Z'
      });
    });
};

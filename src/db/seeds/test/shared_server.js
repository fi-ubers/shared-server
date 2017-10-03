// Seed file
var uuidv4 = require('uuid/v4');
var data = require('./../../../test/servers-test');

exports.seed = function(knex, Promise) {
  return Promise.all([
      // Deletes ALL existing entries
      knex('app_servers').del()
        .then(function () {
          // Inserts seed entries
          return knex('app_servers').insert({
            _ref: uuidv4(),
            createdBy: 4, 
            createdTime: '2017-09-18T18:30:23.000Z',
            name: 'Fiuber',
            lastConnection: '2017-09-18T18:30:23.000Z'
          });
        }).then(function() {
            return knex('app_servers').insert({
              _ref: uuidv4(),
              createdBy: 2, 
              createdTime: '2017-09-15T10:40:14.000Z',
              name: 'AppJ',
              lastConnection: '2017-09-15T10:40:14.000Z'
          });
        }),
        
      knex('app_tokens').del()
        .then(function () {
          return knex('app_tokens').insert({
            id: 1, 
            token: data.appToken1,
          });
        }).then(function() {
            return knex('app_tokens').insert({
              id: 2, 
              token: data.appToken2,
          });
        })
        
    ])
};


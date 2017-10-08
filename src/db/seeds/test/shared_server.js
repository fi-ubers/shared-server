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
        }),
        
      knex('business_users').del()
        .then(function () {
          return knex('business_users').insert({
            _ref: uuidv4(),
            username: 'fiuberkpo',
            password: 'soyunapassword',
            name: 'Pedro',
            surname: 'Fernandez',
            roles: ['user']
          });
        }).then(function() {
            return knex('business_users').insert({
              _ref: uuidv4(),
              username: 'cookie_monster',
              password: '1234',
              name: 'John',
              surname: 'Smith',
              roles: ['admin', 'manager']
          });
        }).then(function() {
            return knex('business_users').insert({
              _ref: uuidv4(),
              username: 'emma23',
              password: 'ilovedogs',
              name: 'Emma',
              surname: 'Duval',
              roles: ['manager', 'user']
          });
        }),
        
      knex('application_users').del()
        .then(function () {
          return knex('application_users').insert({
            _ref: uuidv4(),
            applicationOwner: '2',
            type: 'passenger',
            cars: [],
            username: 'robsparkles',
            password: '4321',
            fb: null,
            name: 'Robin',
            surname: 'Scherbatsky',
            country: 'Canada',
            email: 'robinscher@gmail.com',
            birthdate: '23/07/1980',
            images: ['imageLink', 'anotherImageLink'],
            balance: [{currency: 'ARS', value: 100}]
          });
        }).then(function() {
            return knex('application_users').insert({
              _ref: uuidv4(),
            applicationOwner: '5',
            type: 'passenger',
            cars: [],
            username: 'emi94',
            password: 'p4ssw0rd',
            fb: null,
            name: 'Emilia',
            surname: 'Lopez',
            country: 'Argentina',
            email: 'emilopez@gmail.com',
            birthdate: '18/11/1994',
            images: ['imageLink'],
            balance: [{currency: 'ARS', value: 50}]
          });
        }).then(function() {
            return knex('application_users').insert({
              _ref: uuidv4(),
            applicationOwner: '1',
            type: 'driver',
            cars: [{ id: 3, _ref: 'testRef', owner: '3', properties: {name: 'Chevrolet Spin', value: 'NAF248'}}],
            username: 'iwilldriveu',
            password: 'rightnow',
            fb: null,
            name: 'Marcos',
            surname: 'Sarmiento',
            country: 'Argentina',
            email: 'marquisar@gmail.com',
            birthdate: '10/03/1990',
            images: ['imageLink', 'anotherImageLink'],
            balance: []
          });
        })        
    ])
};


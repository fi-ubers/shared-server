var logger = require('./../logger');
var knex = require('../db/knex');
var pjson = require('../../package.json');

module.exports = {
	selectAll : (function(table) {
		return knex
			.select()
			.from(table);
	}),
	
	selectSome : (function(table, columns) {
		return knex
			.column(columns)
			.select()
			.from(table);
	}),
	
	insert : (function(table, data) {
		return knex(table)
			.insert(data)
			.returning('*');
	}),
	
	selectAllWhere : (function(table, conditions, columns = '*') {
		return knex(table)
			.where(conditions)
			.returning(columns);
	}),
	
	selectOneWhere : (function(table, conditions, columns = '*') {
		return knex(table)
			.where(conditions)
			.first(columns);
	}),
	
	updateWhere : (function(table, conditions, changes, columns = '*') {
		return knex(table)
			.where(conditions)
			.update(changes)
			.returning(columns);
	}),
	
	deleteWhere : (function(table, conditions) {
		return knex(table)
			.where(conditions)
			.del();
	}),
	
	insertAndReturnSome : (function(table, data, columns) {
		return knex(table)
			.insert(data)
			.returning(columns);
	})
}

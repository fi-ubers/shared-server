var logger = require('./../logger');
var knex = require('../db/knex');
var pjson = require('../../package.json');

module.exports = {
	selectAll : (function(table) {
		return knex
			.select()
			.from(table);
	}),
	
	insert : (function(table, data) {
		return knex(table)
			.insert(data)
			.returning('*');
	}),
	
	selectOneWhere : (function(table, conditions) {
		return knex(table)
			.where(conditions)
			.first('*');
	}),
	
	updateWhere : (function(table, conditions, changes) {
		return knex(table)
			.where(conditions)
			.update(changes)
			.returning('*');
	}),
	
	deleteWhere : (function(table, conditions) {
		return knex(table)
			.where(conditions)
			.del();
	})
}

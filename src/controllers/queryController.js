var knex = require('../db/knex');

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

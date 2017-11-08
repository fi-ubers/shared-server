var knex = require('../db/knex');

/** @module queryController */
module.exports = {

	/** Receives a table and selects all rows from it. */
	selectAll : (function(table) {
		return knex
			.select()
			.from(table);
	}),
	
	/** Receives a table and returns all its rows proyecting only the given columns. */
	selectSome : (function(table, columns) {
		return knex
			.column(columns)
			.select()
			.from(table);
	}),
	
	/** Receives a table and inserts in it the given data. */
	insert : (function(table, data) {
		return knex(table)
			.insert(data)
			.returning('*');
	}),
	
	/** Inserts in the table the given data proyecting only the given columns. */
	insertAndReturnSome : (function(table, data, columns) {
		return knex(table)
			.insert(data)
			.returning(columns);
	}),
	
	/** Inserts in the table the given data without return the result. */
	insertWithoutReturn : (function(table, data) {
		return knex(table)
			.insert(data);
	}),
	
	/** Receives a table and selects the rows that meet the conditions. */
	selectAllWhere : (function(table, conditions, columns = '*') {
		return knex(table)
			.where(conditions)
			.returning(columns);
	}),
	
	/** Receives a table and selects the first row where the conditions are true. It
	    only proyects the given columns (all columns by default). */
	selectOneWhere : (function(table, conditions, columns = '*') {
		return knex(table)
			.where(conditions)
			.first(columns);
	}),
	
	/** Updates with the given data only the rows from the table that meet the 
	    conditions and returns them. */
	updateWhere : (function(table, conditions, changes, columns = '*') {
		return knex(table)
			.where(conditions)
			.update(changes)
			.returning(columns);
	}),
	
	/** Receives a table and deletes the rows that meet the conditions. */
	deleteWhere : (function(table, conditions) {
		return knex(table)
			.where(conditions)
			.del();
	})
}

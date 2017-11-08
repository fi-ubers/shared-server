const logger = require('./../logger');
const moment = require('moment');
const Rules = require('../services/rulesService');
const serialize = require('serialize-javascript');
const knex = require('../db/knex');
const deserialize = str => eval('(' + str + ')');
const uuidv4 = require('uuid/v4');
const ruleTable = 'rules';
const commitTable = 'commits';
const businessUsersTable = 'business_users';

var errorController = require('./errorController');
var queryController = require('./queryController');
var responseController = require('./responseController');

/** @module rulesController */
module.exports = {

	/** Lists all the information about the rules. */
	list : function(req, res) {
		var request = "GET at /api/rules";
		logger.info(request);
		queryController.selectAll(ruleTable)
		.then(function(rules) {
			responseController.sendRules(res, rules.length, rules.length, rules);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Creates a rule. */
	register : function(req, res) {
		var request = "POST at /api/rules";
		var language = req.body.language;
		var blob = req.body.blob;
		var active = req.body.active;
		
		logger.info(request);
		if (!language || !blob || active == undefined) { 
			errorController.missingParameters(res, request);
		} else {
			queryController.selectOneWhere(businessUsersTable, {id: req.user.id})
			.then(function(user) {
				if (user) {
					var lastCommit = {
						author: user,
						message: 'Create rule',
						timestamp: moment().format() 
					};
					
					queryController.insert(ruleTable, {_ref: uuidv4(), language: language, lastCommit: lastCommit, blob: blob , active: active})
					.then(function(rule) {
						logger.info("Storing new commit of rule " + rule[0].id);
						queryController.insert(commitTable, {rule: rule[0], ruleId: rule[0].id});
						responseController.sendRule(res, 201, rule[0]);
					})
					
				} else {
					errorController.nonExistentResource(res, "user", request);	
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Executes a set of rules. */
	executeRules : function(req, res) {
		var request = "POST at /api/rules/run";
		var rules = req.body.rules;
		var facts = req.body.facts;
		
		logger.info(request);
		if (!rules || !facts) { 
			errorController.missingParameters(res, request);
		} else {
			rules = rules.map(deserialize);
			facts.map(fact => {
				fact = deserialize(fact.blob);
				Rules.execute(fact, rules)
					.then(function(r) {
						// ??????
					})
					.catch(function(error) {
						errorController.unexpectedError(res, error, request);
					})
			});
			
		}
	},
	
	/** Deletes a rule. */
	deleteRule : function(req, res) {
		var ruleId = req.params.ruleId;
		var request = "DELETE at /api/rules/" + ruleId;
		
		logger.info(request);
		queryController.selectOneWhere(ruleTable, {id: ruleId})
		.then(function(rule) {
			if (rule) {
				logger.info("Deleting rule " + ruleId);
				queryController.deleteWhere(ruleTable, {id: ruleId})
				.then( function() { 
					logger.debug("Correct removal: rule " + ruleId);
					res.status(204).send();
				});
							
			} else {
				errorController.nonExistentResource(res, "rule", request);	
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		})
	},
	
	/** Obtains the information about a rule. */
	getInformation : function(req, res) {
		var ruleId = req.params.ruleId;
		var request = "GET at /api/rules/" + ruleId;
		
		logger.info(request);
		queryController.selectOneWhere(ruleTable, {id: ruleId})
		.then(function(rule) {
			if (rule) {
				responseController.sendRule(res, 200, rule);
			} else {
				errorController.nonExistentResource(res, "rule", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	},
	
	/** Modifies a rule, generating a new commit. */
	modifyRule : function(req, res) {
		var ruleId = req.params.ruleId;
		var receivedRef = req.body._ref;
		var language = req.body.language;
		var blob = req.body.blob;
		var active = req.body.active;
		var request = "PUT at /api/rules/" + ruleId;
		
		logger.info(request);
		if (!receivedRef || !language || !blob || active == undefined) {
			errorController.missingParameters(res, request);
		} else {
			queryController.selectOneWhere(ruleTable, {id: ruleId})
			.then(function(rule) {
				if (rule) {
					if (rule._ref != receivedRef) {
						errorController.updateConflict(res, request);
					} else {
						logger.info("Updating information of rule " + ruleId);
						queryController.selectOneWhere(businessUsersTable, {id: req.user.id})
						.then(function(user) {
							if (user) {
								return queryController.updateWhere(ruleTable, {id: ruleId}, {
													_ref: uuidv4(),
													language: language, 
													lastCommit: {
														author: user,
														message: 'Modify rule',
														timestamp: moment().format()
													}, 
													blob: blob,
													active: active});
							} else {
								errorController.nonExistentResource(res, "user", request);	
							}
						})
						.then(function(updatedRule) {
							if (updatedRule) {
								logger.info("Storing new commit of rule " + ruleId);
								queryController.insert(commitTable, {rule: updatedRule, ruleId: ruleId});
								responseController.sendRule(res, 200, updatedRule[0]);
							}
						})
					}
				} else {
					errorController.nonExistentResource(res, "rule", request);	
				}
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Runs the rule individually. */
	run : function(req, res) {
		var ruleId = req.params.ruleId;
		var facts = req.body.facts;
		var request = "POST at /api/rules/" + ruleId + "/run";
		logger.info(request);
		
		if (!facts) { 
			errorController.missingParameters(res, request);
		} else {
			queryController.selectOneWhere(ruleTable, {id: ruleId}, ['blob'])
			.then(function(rule) {
				rule = deserialize(rule);
				facts.map(fact => {
					fact = deserialize(fact.blob);
					Rules.execute(fact, rule)
						.then(function(r) {
							// ??????
						});
				});
			}).catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Lists all the commits of a rule. */
	getCommits : function(req, res) {
		var ruleId = req.params.ruleId;
		var request = "GET at /api/rules/" + ruleId + "/commits";
		logger.info(request);
		
		queryController.selectAllWhere(commitTable, {ruleId: ruleId}, ['rule'])
		.then(function(rules) {
			commits = rules.map(rule => rule.lastCommit);
			responseController.sendCommits(res, commits.length, commits.length, commits);
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	},
	
	/** Returns the rule in the commit state. */
	getRuleInCommitState : function(req, res) {
		var ruleId = req.params.ruleId;
		var commitId = req.params.commitId;
		var request = "GET at /rules/" + ruleId + "/commits/" + commitId;
		
		logger.info(request);
		queryController.selectOneWhere(commitTable, {id: commitId, ruleId: ruleId}, ['rule'])
		.then(function(rule) {
			if (rule) {
				responseController.sendRule(res, 200, rule);
			} else {
				errorController.nonExistentResource(res, "rule", request);
			}
		})
		.catch(function(error) {
			errorController.unexpectedError(res, error, request);
		});
	}

}

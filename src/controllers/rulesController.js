var logger = require('./../logger');
var uuidv4 = require('uuid/v4');
var ruleTable = 'rules';

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
			queryController.insert(ruleTable, {_ref: uuidv4(), language: language, blob: blob , active: active})
			.then(function(rule) {
				responseController.sendRule(res, 201, rule[0]);
			})
			.catch(function(error) {
				errorController.unexpectedError(res, error, request);
			})
		}
	},
	
	/** Executes a set of rules. */
	executeRules : function(req, res) {
		//logger.info("POST at /rules/run");
		// Execute a set of rules
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
		logger.info("GET at /rules/" + req.params.ruleId);
	},
	
	/** Modifies a rule, generating a new commit. */
	modifyRule : function(req, res) {
		//logger.info("PUT at /rules/" + req.params.ruleId);
		// Modify a rule
	},
	
	/** Runs the rule individually. */
	run : function(req, res) {
		//logger.info("POST at /rules/" + req.params.ruleId + "/run");
		// Run the rule individually
	},
	
	/** Lists all the commits of a rule. */
	getCommits : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId + "/commits");
	},
	
	/** Returns the rule in the commit state. */
	getRuleInCommitState : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId + "/commits/" + req.params.commitId);
	}

}

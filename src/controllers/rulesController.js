var logger = require('./../logger');

/** @module rulesController */
module.exports = {

	/** Lists all the information about the rules. */
	list : function(req, res) {
		logger.info("GET at /rules");
		res.send("List of rules");
	},
	
	/** Creates a rule. */
	register : function(req, res) {
		//logger.info("POST at /rules");
		// Register a rule
	},
	
	/** Executes a set of rules. */
	executeRules : function(req, res) {
		//logger.info("POST at /rules/run");
		// Execute a set of rules
	},
	
	/** Deletes a rule. */
	deleteRule : function(req, res) {
		//logger.info("DELETE at /rules/" + req.params.ruleId);
		// Delete rule
	},
	
	/** Obtains the information about a rule. */
	getInformation : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId);
		res.send("Get info of a rule");
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
		res.send("List of commits of a rule");
	},
	
	/** Returns the rule in the commit state. */
	getRuleInCommitState : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId + "/commits/" + req.params.commitId);
		res.send("Rule in the commit state");
	}

}

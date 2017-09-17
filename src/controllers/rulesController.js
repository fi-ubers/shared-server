var logger = require('./../logger');

module.exports = {
	list : function(req, res) {
		logger.info("GET at /rules");
		res.send("List of rules");
	},
	
	register : function(req, res) {
		//logger.info("POST at /rules");
		// Register a rule
	},
	
	executeRules : function(req, res) {
		//logger.info("POST at /rules/run");
		// Execute a set of rules
	},
	
	deleteRule : function(req, res) {
		//logger.info("DELETE at /rules/" + req.params.ruleId);
		// Delete rule
	},
	
	ruleInfo : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId);
		res.send("Get info of a rule");
	},
	
	modifyRule : function(req, res) {
		//logger.info("PUT at /rules/" + req.params.ruleId);
		// Modify a rule
	},
	
	run : function(req, res) {
		//logger.info("POST at /rules/" + req.params.ruleId + "/run");
		// Run the rule individually
	},
	
	commits : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId + "/commits");
		res.send("List of commits of a rule");
	},
	
	commitState : function(req, res) {
		logger.info("GET at /rules/" + req.params.ruleId + "/commits/" + req.params.commitId);
		res.send("Rule in the commit state");
	}

}

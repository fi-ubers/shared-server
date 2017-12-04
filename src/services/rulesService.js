const RuleEngine = require('node-rules');

/** @module rulesService */
module.exports = {

	/** Executes the rule engine to apply rules on a fact. */
	execute : function(fact, rules) {
		return new Promise((resolve) => {
			const R = new RuleEngine([], { ignoreFactChanges: true });
			R.fromJSON(rules);
			R.execute(fact, (r) => resolve(r));
		});
	}	
}

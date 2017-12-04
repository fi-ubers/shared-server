var usersTable = 'application_users';
var queryController = require('./queryController');
var uuidv4 = require('uuid/v4');

/** @module balanceController */
module.exports = {

	/** Receives the id of the user, the cost of the trip and if it is a negative transaction.
	 *  Updates the balance of the user. */
	manageBalance : (function(userId, cost, sign) {
		queryController.selectOneWhere(usersTable, { id: userId })
		.then(function(userData) {
			var count = 0;
			var balance = userData.balance;
			var valueAux = cost.value;
			
			if (sign == 'negative') {
				valueAux = -cost.value;
			}
			
			balance.map((element) => {
				if (element.currency == cost.currency) {
					element.value += valueAux;
				} else {
					count++;
				}
			});
			
			if (count == balance.length) {
				balance.push({ currency: cost.currency, value: valueAux })
			}
			queryController.updateWhere(usersTable, { id: userId }, { _ref: uuidv4(), balance: balance }).then();
		})
	})
}

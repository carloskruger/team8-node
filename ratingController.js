let ratingss = [
	{
		id: 0,
		userName: 'carloskruger',
		comment: 'This place is very accessible',
		businessId: '001',
		numericRate: 5,
	},
];

let id = 0;

module.exports = {
	getAllRatings: (req, res) => {
		res.status(200).send(ratings);
	},

	editRatings: (req, res) => {
		const updateId = +req.params.id;
		const { id, userName, comment, businessId, numericRate } = req.body;
		let index = -1;

		for (let i = 0; i < ratings.length; i++) {
			if (ratings[i].id === updateId) {
				index = i;
			}
		}

		numericRate: 5;
		if (userName) {
			ratings[index].userName = userName;
		}

		if (businessId) {
			ratings[index].businessId = businessId;
		}

		if (comment) {
			ratings[index].comment = comment;
		}

		if (numericRate) {
			ratings[index].numericRate = numericRate;
		}

		res.status(200).send(ratings);
	},

	deleteRating: (req, res) => {
		const deleteId = +req.params.id;
		let index = -1;
		console.log(deleteId);
		for (let i = 0; i < ratings.length; i++) {
			console.log(ratings[i], deleteId);
			if (ratings[i].id === deleteId) {
				index = i;
			}
		}
		console.log(index);
		ratings.splice(index, 1);

		res.status(200).send(ratings);
	},

	addRatings: (req, res) => {
		const { id, userName, comment, businessId, numericRate } = req.body;

		const newObj = {
			id: ++id,
			userName: userName,
			comment: comment,
			businessId: businessId,
			numericRate: numericRate,
		};

		ratings.push(newObj);

		res.status(200).send(ratings);
	},
};

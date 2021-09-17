let businesses = [
	{
		id: 0,
		businessName: 'Delaware Tech Center',
		businessId: '001',
		businessAddress: '880 Powder Mill Road, Wilmington, De 19803',
		businessPhone: '302-999-9999',
		averageRating: 5,
	},
];

let id = 0;

module.exports = {
	getAllBusinesses: (req, res) => {
		res.status(200).send(businesses);
	},

	editBusiness: (req, res) => {
		const updateId = +req.params.id;
		const {
			id,
			businessName,
			businessId,
			businessAddress,
			businessPhone,
			averageRating,
		} = req.body;
		let index = -1;

		for (let i = 0; i < businesses.length; i++) {
			if (businesses[i].id === updateId) {
				index = i;
			}
		}

		if (businessName) {
			businesses[index].businessName = businessName;
		}

		if (businessId) {
			businesses[index].businessId = businessId;
		}

		if (businessAddress) {
			businesses[index].businessAddress = businessAddress;
		}

		if (businessPhone) {
			businesses[index].businessPhone = businessPhone;
		}

		if (averageRating) {
			customers[index].averageRating = averageRating;
		}

		res.status(200).send(businesses);
	},

	deleteBusiness: (req, res) => {
		const deleteId = +req.params.id;
		let index = -1;
		console.log(deleteId);
		for (let i = 0; i < businees.length; i++) {
			console.log(businesses[i], deleteId);
			if (businesses[i].id === deleteId) {
				index = i;
			}
		}
		console.log(index);
		businesses.splice(index, 1);

		res.status(200).send(businesses);
	},

	addBusiness: (req, res) => {
		const {
			id,
			businessName,
			businessId,
			businessAddress,
			businessPhone,
			averageRating,
		} = req.body;

		const newObj = {
			id: ++id,
			businessName: businessName,
			businessId: businessId,
			businessAddress: businessAddress,
			businessPhone: businessPhone,
			averageRating: averageRating,
		};

		businesses.push(newObj);

		res.status(200).send(businesses);
	},
};

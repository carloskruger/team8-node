let customers = [
	{
		id: 0,
		firstName: 'Carlos',
		lastName: 'Kruger',
		userName: 'carloskruger',
		password: 'mypassword',
		email: 'customer1@email.com',
	},
];

let id = 0;

module.exports = {
	getAllCustomers: (req, res) => {
		res.status(200).send(customers);
	},

	editCustomer: (req, res) => {
		const updateId = +req.params.id;
		const { id, firstName, lastName, userName, password, email } = req.body;
		let index = -1;

		for (let i = 0; i < customers.length; i++) {
			if (customers[i].id === updateId) {
				index = i;
			}
		}

		if (firstName) {
			customers[index].firstName = firstName;
		}

		if (lastName) {
			customers[index].lastName = lastName;
		}

		if (userName) {
			customers[index].userName = userName;
		}

		if (password) {
			customers[index].password = password;
		}

		if (email) {
			customers[index].email = email;
		}

		res.status(200).send(customers);
	},

	deleteCustomer: (req, res) => {
		const deleteId = +req.params.id;
		let index = -1;
		console.log(deleteId);
		for (let i = 0; i < customers.length; i++) {
			console.log(customerss[i], deleteId);
			if (customers[i].id === deleteId) {
				index = i;
			}
		}
		console.log(index);
		customers.splice(index, 1);

		res.status(200).send(customers);
	},

	addCustomer: (req, res) => {
		const { firstName, lastName, userName, password, email } = req.body;

		const newObj = {
			id: ++id,
			firstName: firstName,
			lastName: lastName,
			userName: userName,
			password: password,
			email: email,
		};

		customers.push(newObj);

		res.status(200).send(customers);
	},
};

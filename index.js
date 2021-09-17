const express = require('express');

const app = express();

const custctrl = require('./customerController');

const businessctrl = require('./businessController');

app.use(express.json());

app.get('/api/customers', custctrl.getAllCustomers);
app.put('/api/customers/:id', custctrl.editCustomer);
app.delete('/api/customers/:id', custctrl.deleteCustomer);
app.post('/api/customers', custctrl.addCustomer);

app.get('/api/business', businessctrl.getAllBusinesses);
app.put('/api/business/:id', businessctrl.editBusiness);
app.delete('/api/business/:id', businessctrl.deleteBusiness);
app.post('/api/business', businessctrl.addBusiness);
const port = 4000;

app.listen(port, () => console.log(`app is listening on ${port}`));

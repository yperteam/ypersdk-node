const Invoices = require('./service/invoice/request');
const API = require('./api');
require('dotenv').config();

async function init(api) {
    await api.getToken();
}

const applicationKey = process.env.APP_ID;
const applicationSecret = process.env.APP_SECRET;
const env = process.env.YPER_ENV === 'production' ? 'production' : 'beta';
const api = new API(applicationKey, applicationSecret, [], env);

init(api);
const invoices = new Invoices(api);
module.exports = { invoices };
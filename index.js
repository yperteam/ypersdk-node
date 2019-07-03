import { API } from './api';
import { Invoices } from './service/invoice/request';
require('dotenv').config();

const applicationKey = process.env.APP_ID;
const applicationSecret = process.env.APP_SECRET;

async function start() {
    const api = new API(applicationKey, applicationSecret, [], 'beta');
    await api.getToken();
    const inv = new Invoices(api);
}

start();
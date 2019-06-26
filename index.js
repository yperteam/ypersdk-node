import { API } from './api';

require('dotenv');

const applicationKey = process.env.APP_ID;
const applicationSecret = process.env.APP_SECRET;

const api = new API(applicationKey, applicationSecret, [], 'beta');

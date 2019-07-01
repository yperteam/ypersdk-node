import { Request } from '../../request';

class Invoices {

    static async get(api) {
        console.log('HERE:', api);
        const res = await Request.performRequest('/invoice', 'GET', null, null, api);
        console.log('RES:', res);
    }
}

export { Invoices };

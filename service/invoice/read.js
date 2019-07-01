import { Request } from '../../request';

class Invoices {

    static async get(api) {
        const res = await Request.performRequest('/invoice', 'GET', null, null, api);
    }
}

export { Invoices };

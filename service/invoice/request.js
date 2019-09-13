const Request = require('../../request');

class Invoices {

    constructor(api) {
        this.api = api;
    }

    async execute(path, action, body, withRetry) {
        let response;
        const req = new Request(path, action, null, body, this.api);
        response = await req.perform().catch(async reason => {
            if (`${reason.statusCode}` === '401' && withRetry) {
                await this.api.getToken();
                response = this.execute(path, action, body, false);
            }
        });

        return response;
    }

    async get(id) {
        return await this.execute(`/invoice/${id}`, 'GET', null, true)
    }

    async create(body) {
        return await this.execute('/invoice', 'POST', body, true);
    }

    async addItem(id, item) {
        return await this.execute(`/invoice/${id}/item`, 'POST', item, true);
    }

    async validate(id) {
        return await this.execute(`/invoice/${id}/validate`, 'POST', null, true);
    }

    async download(id) {
        return await this.execute(`/invoice/${id}/download`, 'GET', null, true);
    }
}

module.exports = Invoices;

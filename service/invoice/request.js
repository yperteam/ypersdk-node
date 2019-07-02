import { Request } from '../../request';

export class Invoices {

    constructor(api) {
        this.api = api;
    }

    async get(id) {
        const req = new Request(`/invoice/${id}`, 'GET', null, null, this.api);
        return await req.perform();
    }

    async create(body) {
        const req = new Request('/invoice', 'POST', null, body, this.api);
        return await req.perform();
    }

    async addItem(id, item) {
        const req = new Request(`/invoice/${id}/item`, 'POST', null, item, this.api);
        return await req.perform();
    }

    async validate(id) {
        const req = new Request(`/invoice/${id}/validate`, 'POST', null, null, this.api);
        return await req.perform();
    }

    async download(id) {
        const req = new Request(`/invoice/${id}/download`, 'GET', null, null, this.api);
        return await req.perform();
    }
}
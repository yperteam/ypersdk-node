//var rp = require('request-promise');
import requestPromise from 'request-promise';

class Request {
    constructor(method, url) {
        this.method = method;
        this.url = url;

    }

    static addHeader(header, value) {
        this.headers = [header, ':', value];
    }

    static setBody(body) {
        this.body = body;
    }

    static async performRequest(endpoint, method, req, data, api) {
        let query = {};
        if (!req) {
            req = { headers: { authorization: '' }, query: {} };
        }
        if (req && req.query) {
            req.query = req.query || {};
            query = Object.assign(query, req.query);
        }
        let uri = endpoint;
        if (!endpoint.startsWith('http')) {
            uri = api.baseURL + endpoint;
        }
        let options = {
            uri: uri,
            method,
            body: data,
            json: true,
            resolveWithFullResponse: true,
            qs: query,
            headers: {
                'User-Agent': 'Request-Promise',
                Authorization: `Bearer ${api.access_token}`,
                'content-type': 'application/json',
                'X-Request-Timestamp': 0,
                'accept-version': ['']
            },

        };
        return requestPromise(options)
            .then(function (body) {
                return body.body;
            });
    }
}

export { Request };
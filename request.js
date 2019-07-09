const requestPromise = require('request-promise');

class Request {
    constructor(endpoint, method, req, body, api) {
        let qs = {};
        if (!req) {
            req = { headers: { authorization: '' }, query: {} };
        }
        if (req && req.query) {
            req.query = req.query || {};
            qs = Object.assign(qs, req.query);
        }
        this.options = {
            uri: api.baseURL + endpoint,
            method,
            body,
            json: true,
            resolveWithFullResponse: true,
            qs,
            headers: {
                'User-Agent': 'Request-Promise',
                Authorization: `Bearer ${api.access_token}`,
                'content-type': 'application/json',
                'X-Request-Timestamp': 0,
                'accept-version': ['']
            },
        };

    }

    async perform() {
        return requestPromise(this.options)
            .then(function (body) {
                return body.body;
            });
    }
}

module.exports = Request;
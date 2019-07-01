import requestPromise from 'request-promise';

class Request {
    constructor(method, url) {
        this.method = method;
        this.url = url;

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
            uri,
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

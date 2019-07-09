import "babel-polyfill";
import { exportAllDeclaration } from "@babel/types";
const API = require('../api');
const api = new API('id', 'secret', [], 'beta');
const Request = require('../request');

describe('Core API', () => {
    it('should instanciate a request', () => {

        const rq = new Request('/test', 'GET', null, null, api);
        expect(rq).toEqual({
            options:
            {
                uri: 'https://io.beta.yper.org/test',
                method: 'GET',
                body: null,
                json: true,
                resolveWithFullResponse: true,
                qs: {},
                headers:
                {
                    'User-Agent': 'Request-Promise',
                    Authorization: 'Bearer undefined',
                    'content-type': 'application/json',
                    'X-Request-Timestamp': 0,
                    'accept-version': ['']
                }
            }
        })
    })
});

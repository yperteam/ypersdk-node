import { API } from '../api';

describe('Core API', () => {
  it('should instanciate right environment', () => {
    const api = new API('id', 'secret', [], 'beta');
    expect(api.applicationKey).toEqual('id');
    expect(api.applicationSecret).toEqual('secret');
    expect(api.scope).toEqual([]);
    expect(api.environment).toEqual('beta');
    expect(api.baseURL).toEqual('https://io.beta.yper.org');
  });

  it('should throw an error is missing keys', () => {
    expect(() => (new API('id', 'secret'))).not.toThrow();
    expect(() => (new API(null, null))).toThrow('Application key parameter is empty');
    expect(() => (new API('id', null))).toThrow('Application secret parameter is empty');
  });
})

const Request = require('./request');

const endpoints = {
  'development': 'http://localhost:5000',
  'beta': 'https://io.beta.yper.org',
  'production': 'https://api.yper.io'
};

class API {
  constructor(
    applicationKey,
    applicationSecret,
    scope = ['global'],
    environment = 'production'
  ) {
    if (!applicationKey) {
      throw new Error('Application key parameter is empty');
    }

    if (!applicationSecret) {
      throw new Error('Application secret parameter is empty');
    }

    this.applicationKey = applicationKey;
    this.applicationSecret = applicationSecret;
    this.scope = scope;
    this.environment = environment;
    this.baseURL = endpoints[environment];
  }

  async getToken() {
    const req = new Request('/oauth/token', 'POST', null, {
      'client_id': this.applicationKey,
      'client_secret': this.applicationSecret,
      'grant_type': 'client_credentials',
      'scope': ['invoice:view',
        'invoice:create',
        'invoice:item:create',
        'invoice:item:delete',
        'invoice:download',
        'invoice:index',
        'invoice:validate']
    }, this);
    const token = await req.perform();
    this.access_token = token.result.access_token;
  }
}

module.exports = API;
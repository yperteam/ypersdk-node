const endpoints = {
  'development': 'http://localhost:5000',
  'beta'       : 'https://io.beta.yper.org',
  'production' : 'https://api.yper.io'
};

export class API {
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
}

const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://localhost:8080/',
    secure: false, //não utilizando ssl
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;

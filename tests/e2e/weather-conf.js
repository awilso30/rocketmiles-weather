exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:5000',
  specs: ['weather-spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}

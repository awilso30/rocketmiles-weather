exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['weather-spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}

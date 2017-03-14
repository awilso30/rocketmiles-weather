// start tests
describe('Rocketmiles Weather', function() {
  var currentCity = element(by.css('.currentcity-container > ul:nth-child(1) > li:nth-child(1)'));
  var currenWeather = element(by.css('.currentweather-list > li:nth-child(1)'));
  var forecast = element(by.css('.forecast-container > div:nth-child(1) > h2:nth-child(1)'));
  var panels = element.all(by.repeater('weather in item.weather'));
  var changeCity = element(by.css('.currentcity-container > ul:nth-child(1) > li:nth-child(5) > span:nth-child(1) > button:nth-child(1)'));
  var input = element(by.css('input'));
  var submit = element(by.css('.currentcity-container > ul:nth-child(1) > li:nth-child(5) > button:nth-child(3)'));
  var selectedCity = element(by.css('.currentcity-container > ul:nth-child(1) > li:nth-child(4) > span'));
  var dayFourHigh = element(by.css('ul.ng-binding:nth-child(4) > ul:nth-child(1) > li:nth-child(2) > span:nth-child(1)'));

// set url for each test, wait for browser to load
  beforeEach(function() {
      browser.ignoreSynchronization = false;
      browser.get('https://awilso30.github.io/rocketmiles-weather/');
      browser.driver.sleep(10000);
  });

  xit('should have a title', function() {
    expect(browser.getTitle()).toContain('Rocketmiles');
  });

  xit('should have a current city', function() {
    expect(currentCity.isPresent()).toBe(true);
    expect(currentCity.isDisplayed()).toBe(true);
  });

  xit('should have a current weather', function() {
    expect(currenWeather.isPresent()).toBe(true);
    expect(currenWeather.isDisplayed()).toBe(true);
  });

  xit('should have a 7 day forecast', function() {
    expect(forecast.isPresent()).toBe(true);
    expect(forecast.isDisplayed()).toBe(true);
  });

  xit('should have 7 panels of forecast data', function() {
        panels.then(function(result){
        expect(result.length).toEqual(7);
    });
  });

  xit('should accept a new city (Miami) and display corresponding weather information', function() {
    changeCity.click();
    browser.driver.sleep(2000);
    input.click();
    browser.driver.sleep(2000);
    input.clear();
    browser.driver.sleep(1000);
    input.sendKeys('Miami');
    browser.driver.sleep(2000);
    submit.click();
    browser.driver.sleep(4000);
    element(by.binding('current.city')).getText().then(function(value) {
      expect(value).toContain('Miami');
      expect(dayFourHigh.isPresent()).toBe(true);
      expect(dayFourHigh.isDisplayed()).toBe(true);
    });
  });

  xit('should accept a new city (Vancouver) and display corresponding weather information', function() {
    changeCity.click();
    browser.driver.sleep(2000);
    input.click();
    browser.driver.sleep(2000);
    input.clear();
    browser.driver.sleep(1000);
    input.sendKeys('Vancouver');
    browser.driver.sleep(2000);
    submit.click();
    browser.driver.sleep(4000);
    element(by.binding('current.city')).getText().then(function(value) {
      expect(value).toContain('Vancouver');
      expect(dayFourHigh.isPresent()).toBe(true);
      expect(dayFourHigh.isDisplayed()).toBe(true);
    });
  });

});

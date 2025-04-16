exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      host: '127.0.0.1',
      port: 4723,
      path: '/wd/hub',
      platform: 'Android',
      waitForTimeout: 20000,
      desiredCapabilities: {
        'platformName': 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '12',
        'appium:appPackage': 'com.example.codeceptjsversion2',
        'appium:appActivity': '.MainActivity',
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:forceAppLaunch': true,
        'appium:newCommandTimeout': 120
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJsVersion2'
}

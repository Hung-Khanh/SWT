const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: './tests/*.js',
    output: './output',
    helpers: {
        Playwright: {
            browser: 'chromium',
            url: 'http://127.0.0.1:5500/',
            show: true,
        },
    },
    include: {
        I: './steps_file.js',
    },
    name: 'testCodeCeptjs',
};

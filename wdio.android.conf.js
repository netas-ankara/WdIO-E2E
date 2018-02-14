var env = require('./environment.js');
let appiumController = require('appium-controller');

exports.config = {

    host: '127.0.0.1',
    port: 4723,

    suites: {
        Test: [
            './Tests/Mobile/Features/Test.feature'
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 1,

    capabilities: [
        {
            browserName: '',
            appiumVersion: '1.7.2',
            avd: 'Nexus',
            deviceName: 'Android Emulator',
            platformVersion: '6.0',
            platformName: 'android',
            app: __dirname + '/Apps/app.apk',
            waitforTimeout: 60000,
            commandTimeout: 60000
        }
    ],

    debug: false,

    // https://github.com/rhysd/wdio-appium-service/issues/2
    services: [
        //'appium' // Unable to use service on windows
    ],
    seleniumLogs: env.seleniumLogs,

    // ===================
    // Test Configurations
    // ===================

    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Per default WebdriverIO commands getting executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // using promises you can set the sync command to false.
    sync: env.sync,

    // Shorten url command calls by setting a base url. If your url parameter starts with "/"
    // the base url gets prepended.
    baseUrl: 'http://google.com',

    // Default timeout for all waitForXXX commands.
    waitforTimeout: env.waitforTimeout,

    framework: 'cucumber',

    reporters: env.reporters,

    reporterOptions: env.reporterOptions,

    // See also: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
    cucumberOpts: {
        require: [
            'Tests/Mobile/StepDefinations/**/*.js',
            'Tests/Mobile/Shared/*.js',
            "Tests/Shared/*.js"
        ],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [
            'js:babel-register'
        ],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source URIs
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 60000,      // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },

    // =====
    // Hooks
    // =====

    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: env.onPrepare,

    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    before: env.before,

    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onComplete: env.onComplete,

    // Cucumber specific hooks

    afterStep: env.afterStep,
};
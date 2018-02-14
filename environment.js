'use strict';

let appiumController = require('appium-controller');

module.exports = {
    seleniumLogs: './Logs',

    sync: true,

    waitforTimeout: 5000,

    reporters: [
        'allure',
        'spec'
    ],

    reporterOptions: {
        allure: {
            outputDir: './Reports/allure-results/'
        }
    },

    onPrepare: function (config, capabilities) {
        if(!capabilities.browserName)
            appiumController.startAppium();
    },

    before: function (capabilities, specs) {
        var moment = require('moment');
        moment.locale('en');
        global.testStartDate = moment().format('LLLL');

        // Required Utils
        global.CommonUtils = require('./Tests/Shared/CommonUtils');
        require('./Tests/Shared/AddCommand');

        browser.getNSetParams();

        if(capabilities.browserName)
            CommonUtils.browserSettings();

        CommonUtils.chaiSettings();
    },

    afterStep: function (stepResult) {
        if (stepResult.isFailed()) {
            var name = 'ERROR-chrome-' + Date.now();
            browser.saveScreenshot('./Reports/ScreenShots/'+ name + '.png');
        }
    },

    onComplete: function (exitCode, config, capabilities) {
        if(!capabilities.browserName)
            appiumController.stopAppium();
    },
};
"use strict";

module.exports = function () {
    let module = {};

    /**
     * Set Browser default behaviours
     */
    module.browserSettings = () => {
        browser.windowHandleMaximize();

        browser.timeouts('script', 90000);
        //browser.timeouts('pageLoad', 10000);
        browser.timeouts('implicit', 5000);
    };

    /**
     * Chai validation settings
     */
    module.chaiSettings = () => {
        const chai    = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    };

    return module;
}();
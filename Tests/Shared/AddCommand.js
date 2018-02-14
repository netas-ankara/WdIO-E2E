"use strict";

module.exports = (function() {
    /**
     * Get Parameter from arguments
     *
     * https://github.com/webdriverio/webdriverio/issues/1247
     *
     * @example
     * browser.getParam('reportName');
     *
     * * @returns {string|undefined}
     */
    browser.addCommand('getParam', function(paramName) {
        paramName = '--' + paramName;

        for (let option of process.argv) {
            let [key, value] = option.split('=');

            if (key === paramName)
                return value;
        }

        return undefined;
    }, true);

    /**
     * set All paramaters
     *
     * @example
     * browser.getNSetParams();
     * call - browser.params.[parameterName];
     *
     * * @returns {string|undefined}
     */
    browser.addCommand('getNSetParams', function() {
        browser.params = {};

        for (let option of process.argv) {
            let [key, value] = option.split('=');

            var key = key.replace("--", "");

            browser.params[key] = value;
        }

        return undefined;
    }, true);
})();

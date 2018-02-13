"use strict";

module.exports = (function() {
    /**
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
})();

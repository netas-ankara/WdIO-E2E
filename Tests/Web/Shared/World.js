'use strict';

import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, When, Then }) => {

    Given(/^I open(?: "(.*)")? the website$/, function (link) {
        // http://webdriver.io/guide/testrunner/browserobject.html
        link = link || browser.options.baseUrl;

        return browser.url(link);
    });
});

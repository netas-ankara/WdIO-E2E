'use strict';

import { defineSupportCode } from 'cucumber';

import WorldPage from "../Shared/World.PageObject";
import TestPage from "./Test.PageObject";

var Selector = require('../Shared/Selector');

defineSupportCode(({ Given, When, Then }) => {
    Given(/^Waiting for login page is displayed$/, function () {
        return browser.waitForExist(WorldPage.logo, 10000);
    });

    Then(/^Main Page is opened$/, function() {
        console.log(TestPage.listTrees.length);

        return expect(TestPage.fragment).to.exist;
    });
});
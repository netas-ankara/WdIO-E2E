'use strict';

import { defineSupportCode } from 'cucumber';

import WorldPage from "./World.PageObject";

defineSupportCode(({ Given, When, Then }) => {
    When(/^Enter Username "(.*)" and password "(.*)"$/, function (username, password) {
        browser.setValue(WorldPage.userNameInput, username);
        browser.hideDeviceKeyboard('pressKey', 'Done');

        browser.setValue(WorldPage.passwordInput, password);
        browser.hideDeviceKeyboard('pressKey', 'Done');

        return browser.click(WorldPage.loginButton);
    });
});
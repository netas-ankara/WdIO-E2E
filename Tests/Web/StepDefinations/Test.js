'use strict';

import { defineSupportCode } from 'cucumber';

import WorldPage from "../Shared/World.PageObject";
import HomePage from "./Test.PageObject";

defineSupportCode(({ Given, When, Then }) => {

    When(/^Searching "(.*)" that word$/, function(word) {
        HomePage.searchInput.setValue(word);

        return HomePage.searchButton.click();
    });

    Then(/^Logo is exist$/, function () {
        return expect(WorldPage.logoImg).to.exist;
    });
});
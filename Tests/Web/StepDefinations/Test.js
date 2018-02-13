'use strict';

import { defineSupportCode } from 'cucumber';

import WorldPage from "../Shared/World.PageObject";

defineSupportCode(({ Given, When, Then }) => {

    Then(/^Logo is exist/, function () {

        browser.getTitle().should.equal('S. Enes Pekkaya - .Net, c#, Silverlight, Php, JQuery');
        WorldPage.logoImg.getAttribute("alt").should.equal('S. Enes Pekkaya - .net, c#, php');

        return expect(WorldPage.logoImg).to.exist;
    });
});
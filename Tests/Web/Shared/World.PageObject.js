"use strict";

class WorldPage {
    /**
     * define elements
     */
    get logoImg()   { return browser.element('//*[@id="logo"]/a/img'); }
};

export default new WorldPage();
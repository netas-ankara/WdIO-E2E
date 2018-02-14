"use strict";

class HomePage {
    /**
     * define elements
     */
    get searchInput()   { return browser.element('#s'); }
    get searchButton()  { return browser.element('#searchsubmit'); }
};

export default new HomePage();
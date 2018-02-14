"use strict";

let Selector = require('./Selector');

class WorldPage {
    /**
     * define elements
     */
    // Login Page
    get logo()   { return Selector.packageId("afad"); }
    get userNameInput()   { return Selector.packageId("username"); }
    get passwordInput()   { return Selector.packageId("password"); }
    get loginButton()   { return Selector.packageId("login"); }
};

export default new WorldPage();
"use strict";

let Selector = require('../Shared/Selector');

class HomePage {
    /**
     * define elements
     */
    get fragment() { return Selector.packageId("fragment"); }
    get listTrees() { return Selector.packageId("list") + '.childSelector(new UiSelector().className("android.widget.RelativeLayout"))'; }
};

export default new HomePage();
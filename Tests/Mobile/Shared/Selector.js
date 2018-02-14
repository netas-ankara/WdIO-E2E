'use strict';

module.exports = function () {
    let module = {};

    let uiSelector = 'android=new UiSelector()';
    let androidId = 'android=new UiSelector().resourceId("com.android:id/';
    let myPackageId = 'android=new UiSelector().resourceId("com.netas.afad:id/';

    module.text = function (textContent) {
        return uiSelector + '.text("' + textContent + '")';
    };

    module.androidId = function(id) {
        return androidId + id + '")';
    };

    module.packageId = function(myId) {
        return myPackageId + myId + '")';
    };

    return module;
}();
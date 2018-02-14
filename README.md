# WEBDRIVERIO - CUCUMBER - ALLURE REPORTER #

## README ##

An end to end testing platform for Web, Hybrid and Native project.

### This repository includes  ###

End to end specs for Project windows.

### How do I get set up? ###

Just run command prompt below

    install.cmd
    
Or Manuel Install

    npm install
    npm install appium appium-doctor
    npm install -g allure-commandline --save-dev

### Appium Testing For Android Native App ###

For native android testing, please set some variables under "Basic Setup" caption [that link][1]

If you want to check everything is good for appium setup, run below on command prompt

    appium-doctor
    
### Example Run Scripts ###
    wdio wdio.conf.js --suite=Test
    OR
    npm run test-web

### Create Allure Report ###

Just run command prompt below after finish test

    npm run report

[1]: http://appium.io/docs/en/drivers/android-uiautomator2/index.html
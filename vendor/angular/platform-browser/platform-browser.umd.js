/**
 * @license AngularJS v$$ANGULAR_VERSION$$
 * (c) 2010-2016 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (factory());
}(this, function () {
    'use strict';
    goog.module('_angular$platform_browser');
    var platform_browser_1 = goog.require('_angular$platform_browser$src$platform__browser');
    exports.DomEventsPlugin = platform_browser_1.DomEventsPlugin;
    exports.EventManager = platform_browser_1.EventManager;
    exports.EVENT_MANAGER_PLUGINS = platform_browser_1.EVENT_MANAGER_PLUGINS;
    exports.ELEMENT_PROBE_PROVIDERS = platform_browser_1.ELEMENT_PROBE_PROVIDERS;
    exports.BROWSER_APP_COMMON_PROVIDERS = platform_browser_1.BROWSER_APP_COMMON_PROVIDERS;
    exports.BROWSER_SANITIZATION_PROVIDERS = platform_browser_1.BROWSER_SANITIZATION_PROVIDERS;
    exports.BROWSER_PROVIDERS = platform_browser_1.BROWSER_PROVIDERS;
    exports.By = platform_browser_1.By;
    exports.Title = platform_browser_1.Title;
    exports.enableDebugTools = platform_browser_1.enableDebugTools;
    exports.disableDebugTools = platform_browser_1.disableDebugTools;
    exports.HAMMER_GESTURE_CONFIG = platform_browser_1.HAMMER_GESTURE_CONFIG;
    exports.HammerGestureConfig = platform_browser_1.HammerGestureConfig;
    exports.DOCUMENT = platform_browser_1.DOCUMENT;
    exports.DomSanitizationService = platform_browser_1.DomSanitizationService;
    exports.SecurityContext = platform_browser_1.SecurityContext;
    exports.bootstrapStatic = platform_browser_1.bootstrapStatic;
    exports.browserStaticPlatform = platform_browser_1.browserStaticPlatform;
    exports.BROWSER_APP_STATIC_PROVIDERS = platform_browser_1.BROWSER_APP_STATIC_PROVIDERS;
    exports.BrowserPlatformLocation = platform_browser_1.BrowserPlatformLocation;
    exports.browserPlatform = platform_browser_1.browserPlatform;
}));

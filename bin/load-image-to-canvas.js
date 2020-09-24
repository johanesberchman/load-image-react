"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var loadImage = require("blueimp-load-image");
var defaultOptions = {
    canvas: true,
    orientation: true
};
var getOptions = function (options) {
    if (options === void 0) { options = {}; }
    return __assign(__assign({}, options), defaultOptions);
};
exports.loadImageToCanvas = function (src, options) {
    var opts = getOptions(options);
    return new Promise(function (resolve) {
        loadImage(src, function (canvas) { return resolve(canvas); }, opts);
    });
};

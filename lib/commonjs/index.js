"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate = rotate;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-image-rotate' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ImageRotate = _reactNative.NativeModules.ImageRotate ? _reactNative.NativeModules.ImageRotate : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function rotate(params) {
  return ImageRotate.rotate(params);
}
//# sourceMappingURL=index.js.map
import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'react-native-image-rotate' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ImageRotate = NativeModules.ImageRotate ? NativeModules.ImageRotate : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export function rotate(params) {
  return ImageRotate.rotate(params);
}
//# sourceMappingURL=index.js.map
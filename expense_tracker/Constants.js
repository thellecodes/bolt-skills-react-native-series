import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const percentage = (num, p) => {
  return (num / 100) * p;
};

export const Fonts = percentage(SCREEN_WIDTH, 10);
export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

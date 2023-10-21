import { pxToRem } from './utils';

const typography = {
  fontFamily: 'inherit',
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: 0,
    fontSize: pxToRem(36),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: 0,
    fontSize: pxToRem(20),
  },
  h3: {
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: 0,
    fontSize: pxToRem(20),
  },
  body1: {
    letterSpacing: pxToRem(0.3),
    fontSize: pxToRem(15),
  },
} as const;

export default typography;
